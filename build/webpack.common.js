const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = ({ outputFile, sourceMap, minify }) => ({
  entry: {
    index: path.resolve(__dirname, '../src/pages/index/main.js'),
  },
  target: ['web', 'es2021'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `assets/[name]/${outputFile}.bundle.js`,
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // scss
      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, '../src/components')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: sourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: sourceMap,
              postcssOptions: {
                plugins: [['autoprefixer', { grid: true }]],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: sourceMap,
              implementation: require('sass'),
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, '../src/style/common.scss')],
            },
          },
        ],
      },
      // html
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // ejs
      {
        test: /\.ejs$/,
        use: [
          'html-loader',
          {
            loader: 'template-ejs-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.scss', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/pages/index/index.ejs'),
      filename: './index.html',
      chunks: ['index'],
      minify: minify,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/data/'),
          to: './data/',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: false,
      },
    },
  },
})
