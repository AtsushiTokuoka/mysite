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

const validate = (access_key, token) => {
  // 開発環境用のアクセス制御
  if (process.env.APP_ENV === "local") {
    if (access_key === process.env.AUTH_DEV_ACCESS_KEY) {
      return 200;
    } else {
      return checkToken(token);
    }
  }
  // 本番環境用のアクセス制御
  if (process.env.APP_ENV === "production") {
    return checkToken(token);
  }
  // tokenによる認証
  function checkToken(token) {
    if (token === undefined) return 401;
    const verifyToken = JWT.verify(token, process.env.AUTH_SECRET_KEY);
    if (
      process.env.AUTH_USER === verifyToken.username &&
      process.env.AUTH_PASSWORD === verifyToken.password
    ) {
      return 200;
    } else {
      console.log("token Unauthorized");
      return 401;
    }
  }
};

server.get("/", async (req, res) => {
  const access_key = req.headers["x-auth-access-key"];
  const token = req.cookies.auth_token;
  const status = validate(access_key, token);
  res.status(status).send();
});

server.get("/token", (req, res) => {
  const access_key = req.headers["x-auth-access-key"];
  const token = req.query.token;
  const status = validate(access_key, token);
  res.status(status).send();
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

server.listen(port, () => {
  console.log(`Server is running`);
});
