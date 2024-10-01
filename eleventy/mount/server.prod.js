const express = require("express");
const { exec } = require("child_process");

const server = express();

// cmsのコンテンツを取得し、サイトを再ビルド
server.get("/contents", (req, res) => {
  if (req.headers["x-hook"] === "cms_ct") {
    exec("npm run build", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
    res.send("Contents build");
  } else {
    res.send("Invalid request");
  }
});

// 静的ファイルの配信
server.use(express.static("dist"));

server.listen(80, () => {
  console.log(`Server is running`);
});
