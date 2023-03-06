const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = 'main.[chunkhash]'
const sourceMap = false
const minify = true

module.exports = () =>
  merge(commonConf({ outputFile, sourceMap, minify }), {
    mode: 'production',
    devtool: false,
  })
