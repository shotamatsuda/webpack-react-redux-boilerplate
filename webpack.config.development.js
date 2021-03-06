// MIT License
// Copyright (C) 2017-Present Shota Matsuda

const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const config = require('./webpack.config.js')

module.exports = merge(config('development'), {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 5000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
