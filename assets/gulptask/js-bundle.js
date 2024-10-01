/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const gulp = require("gulp");
const named = require("vinyl-named");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const { srcPath, outputPath } = require("./config");

gulp.task("js-bundle", function () {
  return gulp
    .src([
      `${srcPath}/**/*.ts`,
      `!${srcPath}/**/_*/**/*.ts`, // ignore
      `!${srcPath}/global/**/*.ts`, // ignore
    ])
    .pipe(
      named((file) => {
        const relativePath = path.relative(srcPath, file.path);
        return relativePath;
      })
    )
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(outputPath));
});
