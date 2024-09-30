const JWT = require("jsonwebtoken");

function validateAccess(req) {
  const access_key = req.headers["x-admin-access-key"]; // 開発環境用のアクセスキー
  const token = req.cookies.auth_token || req.query.token; // cookie、またはqueryからtokenを取得

  switch (process.env.APP_ENV) {
    case "local": // 開発環境用のアクセス制御
      console.log("access_key", access_key);
      if (access_key === process.env.ADMIN_DEV_ACCESS_KEY) {
        return 200;
      } else {
        return verifyToken(token);
      }
    case "production": // 本番環境用のアクセス制御
      return verifyToken(token);
    default:
      return 401;
  }

  // tokenによる認証
  function verifyToken(token) {
    if (token === undefined) return 401;
    const decodedToken = JWT.verify(token, process.env.ADMIN_SECRET_KEY);
    if (
      process.env.ADMIN_USER === decodedToken.username &&
      process.env.ADMIN_PASSWORD === decodedToken.password
    ) {
      return 200;
    } else {
      console.log("token Unauthorized");
      return 401;
    }
  }
}

module.exports = validateAccess;
