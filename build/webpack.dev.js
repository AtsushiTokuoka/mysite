const path = require('path')
const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = 'main'
const sourceMap = true
const minify = false

module.exports = () =>
  merge(commonConf({ outputFile, sourceMap, minify }), {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
  })
