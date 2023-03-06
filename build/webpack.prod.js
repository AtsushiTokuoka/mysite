const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = 'main.[chunkhash]'
const sourceMap = false

module.exports = () =>
  merge(commonConf({ outputFile, sourceMap }), {
    mode: 'production',
    devtool: false,
  })
