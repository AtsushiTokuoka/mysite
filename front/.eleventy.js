const fs = require("fs");
const path = require("path");
const htmlmin = require("html-minifier");
const moment = require("moment-timezone");

module.exports = function (eleventyConfig) {
  // 環境変数CDN_URLをグローバルデータとして追加
  eleventyConfig.addGlobalData("CDN_URL", process.env.CDN_URL);

  // htmlをminify
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // ビルド時の日時を出力
  eleventyConfig.addGlobalData("lastBuildDate", () => {
    const result = moment(new Date())
      .tz("Asia/Tokyo")
      .format("YYYY-MM-DD-HH:mm:ss");
    return result;
  });

  // jsonテキストとして、テンプレートに出力
  eleventyConfig.addFilter("json", (val) => {
    return JSON.stringify(val);
  });

  // 全ページを取得
  eleventyConfig.addCollection("pages", (collection) => {
    return (
      collection
        .getAll()
        // 一覧データを元にループ生成したページは除外
        .filter((item) => {
          return !item.data.pagination;
        })
        .map((item) => {
          const createdAt = moment(
            fs.statSync(path.join(__dirname, item.inputPath)).birthtime
          )
            .tz("Asia/Tokyo")
            .format("YYYY-MM-DD-HH:mm:ss");
          const updatedAt = moment(
            fs.statSync(path.join(__dirname, item.inputPath)).mtime
          )
            .tz("Asia/Tokyo")
            .format("YYYY-MM-DD-HH:mm:ss");
          return {
            meta: item.data.meta,
            path: item.data.page.url,
            createdAt,
            updatedAt,
          };
        })
    );
  });

  // ディレクトリ設定
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_template",
    },
  };
};
