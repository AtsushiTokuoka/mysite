const express = require("express");
const fs = require("fs");

const server = express();
const port = 80;

// cmsのコンテンツを取得し、サイトを再ビルド
// server.get("/contents", (req, res) => {
//   if (req.headers["x-hook"] === "cms_ct") {
//     const filePath = "./src/index.njk";
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) throw err;
//       fs.writeFileSync(filePath, data, () => {
//         if (err) throw err;
//       });
//     });
//     res.send("Contents build");
//   } else {
//     res.send("Invalid request");
//   }
// });

// 静的ファイルの配信
server.use(express.static("dist"));

server.listen(port, () => {
  console.log(`Server is running`);
});
