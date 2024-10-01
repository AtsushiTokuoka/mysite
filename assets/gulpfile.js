/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const gulp = require("gulp");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { srcPath } = require("./gulptask/config");

// scss compile
require("./gulptask/scss");

// public asset copy
require("./gulptask/public-copy");

// js bundle
require("./gulptask/js-bundle");

gulp.task("watch", function () {
  gulp.parallel("public-copy", "scss", "js-bundle")();
  gulp.watch(`${srcPath}/**/*.scss`, gulp.series("scss"));
  gulp.watch(
    [`${srcPath}/**/*.ts`, `${srcPath}/**/*.vue`],
    gulp.series("js-bundle")
  );
});

exports.build = gulp.parallel("public-copy", "scss", "js-bundle");
