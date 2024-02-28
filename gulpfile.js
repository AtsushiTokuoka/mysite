const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const { VueLoaderPlugin } = require('vue-loader');

const assetsPath = './src/_assets';
const outputPath = './dist/assets';

gulp.task('scss', function(done) {
  return gulp.src(`${assetsPath}/**/*.scss`)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(outputPath));
  done();
});
gulp.task('font', function(done) {
  return gulp.src(`${assetsPath}/fonts/**/*`)
    .pipe(gulp.dest(`${outputPath}/fonts`));
  done();
});

gulp.task('js-bundle', function(done) {
  return gulp.src([`${assetsPath}/**/*.js`,`!${assetsPath}/**/_*/**/*.js`])
  .pipe(named( (file) => {
    const relativePath = path.relative(
      path.join(file.cwd, assetsPath), file.path
    );
    return relativePath;
  }))
  .pipe(webpackStream({
    mode: process.env.MODE,
    output: {
      filename: '[name]',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/, 
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.scss$/, 
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'vue$': process.env.MODE === 'production' ? 'vue/dist/vue.esm-browser.prod.js' : 'vue/dist/vue.esm-browser.js'
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        __VUE_PROD_DEVTOOLS__: JSON.stringify(process.env.MODE === 'development')
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          jquery: {
            test: /[\\/]node_modules[\\/](jquery)[\\/]/,
            name: 'vendors/jquery@3.7.1.js',
            chunks: 'all',
            enforce: true,
          },
          vue: {
            test: /[\\/]node_modules[\\/](vue)[\\/]/,
            name: 'vendors/vue@3.4.20.js',
            chunks: 'all',
            enforce: true,
          },
          vuex: {
            test: /[\\/]node_modules[\\/](vuex)[\\/]/,
            name: 'vendors/vuex@4.1.0.js',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  }))
  .pipe(gulp.dest(outputPath));

  done();
});

gulp.task('watch', function() {
  gulp.series('font')();
  gulp.watch(`${assetsPath}/**/*.scss`, gulp.series('scss'));
  gulp.watch([`${assetsPath}/**/*.js`,`${assetsPath}/**/*.vue`], gulp.series('js-bundle'));
});

exports.build = gulp.parallel('font', 'scss', 'js-bundle');