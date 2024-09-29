// ライブラリ
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// express インスタンス初期化
const server = express();

// ミドルウェア
server.use(morgan("combined"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

// ルーティング
server.use("/", require("./routes"));

// サーバー起動
server.listen(80, () => {
  console.log(`Server is running`);
});
