const express = require("express");

const server = express();

// 静的ファイルの配信
server.use(express.static("dist"));

server.listen(80, () => {
  console.log(`Server is running`);
});
