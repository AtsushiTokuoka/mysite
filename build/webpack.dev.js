const path = require('path')
const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = 'main'
const sourceMap = true

module.exports = () =>
  merge(commonConf({ outputFile, sourceMap }), {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
  })
