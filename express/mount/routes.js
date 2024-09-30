// ライブラリ
const path = require("path");
const router = require("express").Router();
const JWT = require("jsonwebtoken");

// 汎用関数
const validateAccess = require("./functions/validateAccess");

router.get("/", (req, res) => {
  // const access_key = req.headers["x-admin-access-key"];
  // const token = req.cookies.auth_token;
  const status = validateAccess(req);
  res.status(status).send();
});

/* ----------------------------------------
  token
---------------------------------------- */
router.get("/token", (req, res) => {
  // const access_key = req.headers["x-admin-access-key"];
  // const token = req.query.token;
  const status = validateAccess(req);
  res.status(status).send();
});

/* ----------------------------------------
  login
---------------------------------------- */
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: path.join(__dirname, "public") });
});
router.post("/login", (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USER &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    const redirectPath = req.body.redirectPath || "/";
    const token = JWT.sign(
      {
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD,
      },
      process.env.ADMIN_SECRET_KEY
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

module.exports = router;
