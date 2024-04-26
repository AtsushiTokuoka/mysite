const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const server = express();
const port = 80;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

const AUTH_DB_USER = process.env.AUTH_DB_USER;
const AUTH_DB_PASSWORD = process.env.AUTH_DB_PASSWORD;
mongoose
  .connect(
    `mongodb://${AUTH_DB_USER}:${AUTH_DB_PASSWORD}@authdb:27017/mysite_auth?authSource=admin`
  )
  .then(() => console.log("Connected to DB successfully"))
  .catch((err) => console.error(err));

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);

server.get("/", (req, res) => {
  const auth_token = req.cookies.auth_token;
  if (!auth_token) {
    res.status(401).send();
  } else {
    res.status(200).send();
  }
});

server.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.AUTH_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    if (decodedPassword === req.body.password) {
      const token = JWT.sign(
        {
          username: user.username,
          password: user.password,
        },
        process.env.AUTH_SECRET_KEY
      );
      res
        .status(200)
        .cookie("auth_token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
          maxAge: 86400000,
        })
        .send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } else {
    res.status(404).send("User not found");
  }
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

server.post("/register", async (req, res) => {
  if (req.headers["x-forwarded-for"]) {
    res.status(403).send("Invalid request");
  } else {
    const password = req.body.password;
    try {
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.AUTH_SECRET_KEY
      ).toString();

      const user = await User.create(req.body);
      console.log(user);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running`);
});
