// MIT License
// Copyright (C) 2017-Present Shota Matsuda

const merge = require('webpack-merge')
const webpack = require('webpack')

const config = require('./webpack.config.js')

module.exports = merge(config('production'), {
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
