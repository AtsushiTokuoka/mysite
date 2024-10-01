/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const { srcPath, outputPath, assetsUrl } = require("./config");

gulp.task("scss", function () {
  return gulp
    .src([`${srcPath}/**/*.scss`, `!${srcPath}/**/_*.scss`])
    .pipe(
      sass({
        outputStyle: "compressed",
        functions: {
          "assetsUrl()": function () {
            return new sass.compiler.types.String(assetsUrl);
          },
        },
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(outputPath));
});
