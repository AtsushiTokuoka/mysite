/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const gulp = require("gulp");
const { outputPath } = require("./config");

gulp.task("public-copy", function () {
  return gulp
    .src(path.resolve(__dirname, "../public/**/*"))
    .pipe(gulp.dest(`${outputPath}`));
});
