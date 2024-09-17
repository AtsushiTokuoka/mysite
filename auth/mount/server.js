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

const validateToken = (token) => {
  const verifyToken = JWT.verify(token, process.env.AUTH_SECRET_KEY);
  if (
    process.env.AUTH_USER === verifyToken.username &&
    process.env.AUTH_PASSWORD === verifyToken.password
  ) {
    return 200;
  } else {
    return 401;
  }
};

server.get("/", async (req, res) => {
  const auth_token = req.cookies.auth_token;
  if (!auth_token) {
    res.status(401).send();
  } else {
    const status = validateToken(auth_token);
    res.status(status).send();
  }
});

server.post("/login", async (req, res) => {
  if (
    req.body.username === process.env.AUTH_USER &&
    req.body.password === process.env.AUTH_PASSWORD
  ) {
    const redirectPath = req.body.redirectPath || "/";
    const token = JWT.sign(
      {
        username: process.env.AUTH_USER,
        password: process.env.AUTH_PASSWORD,
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
      .redirect(redirectPath);
  } else {
    res.redirect("/auth/login");
  }
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

server.get("/token", (req, res) => {
  const status = validateToken(req.query.token);
  res.status(status).send();
});

server.listen(port, () => {
  console.log(`Server is running`);
});