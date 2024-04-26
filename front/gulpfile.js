/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const gulp = require("gulp");
const gulpIf = require("gulp-if");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const gulpPurgecss = require("gulp-purgecss");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const named = require("vinyl-named");
const { VueLoaderPlugin } = require("vue-loader");

const assetsPath = "./src/_assets";
const outputPath = "./dist/assets";

gulp.task("scss", function () {
  return gulp
    .src([`${assetsPath}/**/*.scss`, `!${assetsPath}/**/_*.scss`])
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(
      gulpIf(
        (file) => {
          return !file.path.replace(/\\/g, "/").match(/global\/base\.css$/);
        },
        gulpPurgecss({
          content: ["./src/**/*.njk"],
        })
      )
    )
    .pipe(gulp.dest(outputPath));
});

gulp.task("public-asset", function () {
  return gulp.src(`public/**/*`).pipe(gulp.dest(`${outputPath}`));
});

gulp.task("js-bundle", function () {
  return gulp
    .src([
      `${assetsPath}/**/*.ts`,
      `!${assetsPath}/**/_*/**/*.ts`,
      `!${assetsPath}/global/**/*.ts`,
    ])
    .pipe(
      named((file) => {
        const relativePath = path.relative(
          path.join(file.cwd, assetsPath),
          file.path
        );
        return relativePath;
      })
    )
    .pipe(
      webpackStream({
        cache: process.env.MODE === "production" ? false : true,
        watch: process.env.MODE === "production" ? false : true,
        mode: process.env.MODE,
        watchOptions: {
          poll: 1000,
        },
        output: {
          filename: (pathData) => {
            const name = pathData.chunk.name;
            if (name.endsWith(".ts")) {
              return name.replace(/\.ts$/, ".js");
            }
            return name;
          },
        },
        module: {
          rules: [
            // {
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets: [
            //         [
            //           '@babel/preset-env',
            //           {
            //             useBuiltIns: 'usage',
            //             corejs: 3
            //           }
            //         ]
            //       ]
            //     }
            //   }
            // },
            {
              test: /\.vue$/,
              exclude: /node_modules/,
              loader: "vue-loader",
            },
            {
              test: /\.ts$/,
              loader: "ts-loader",
              options: {
                appendTsSuffixTo: [/\.vue$/],
                ignoreDiagnostics: [7006], // Suppress "Parameter 'x' implicitly has an 'any' type" error
              },
              exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.scss$/,
              use: [
                "vue-style-loader",
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        require("postcss-purgecss")({
                          content: ["./src/**/*.vue"],
                        }),
                        ["autoprefixer"],
                      ],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    implementation: require("sass"),
                    additionalData: `
                  @use '@/_styles/_variables.scss' as *;
                  @use '@/_styles/_utility.scss' as *;
                  @use '@/_styles/_layout.scss' as *;
                `,
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          extensions: [".ts", ".js", ".vue", ".json"],
          alias: {
            "@": path.resolve(__dirname, "src/_assets"),
            vue$:
              process.env.MODE === "production"
                ? "vue/dist/vue.esm-browser.prod.js"
                : "vue/dist/vue.esm-browser.js",
          },
        },
        plugins: [
          new VueLoaderPlugin(),
          new webpack.DefinePlugin({
            __VUE_PROD_DEVTOOLS__: JSON.stringify(
              process.env.MODE === "development"
            ),
          }),
        ],
        optimization: {
          splitChunks: {
            cacheGroups: {
              jquery: {
                test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                name: "vendors/jquery@3.7.1.js",
                chunks: "all",
                enforce: true,
              },
              vue: {
                test: /[\\/]node_modules[\\/](vue)[\\/]/,
                name: "vendors/vue@3.2.26.js",
                chunks: "all",
                enforce: true,
              },
              vuex: {
                test: /[\\/]node_modules[\\/](vuex)[\\/]/,
                name: "vendors/vuex@4.1.0.js",
                chunks: "all",
                enforce: true,
              },
            },
          },
        },
      })
    )
    .pipe(gulp.dest(outputPath));
});

gulp.task("watch", function () {
  gulp.parallel("public-asset", "scss", "js-bundle")();
  gulp.watch(`${assetsPath}/**/*.scss`, gulp.series("scss"));
  gulp.watch(
    [`${assetsPath}/**/*.ts`, `${assetsPath}/**/*.vue`],
    gulp.series("js-bundle")
  );
});

exports.build = gulp.parallel("public-asset", "scss", "js-bundle");
