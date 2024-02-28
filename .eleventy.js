const htmlmin = require("html-minifier");
const moment = require("moment");

module.exports = function (eleventyConfig) {

  // htmlをminify
  eleventyConfig.addTransform("htmlmin", (content,outputPath) => {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified;
    }
    return content;
  })

  // ビルド時の日時を出力
  eleventyConfig.addGlobalData("lastBuildDate", () => {
    const result = moment(new Date()).format('YYYY-MM-DD-HH:mm:ss');
    return result;
  });

  // ディレクトリ設定
  return {
      dir: {
          input: 'src',
          output: 'dist',
          includes: '_template',
      },
  };
};