// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['dist/*.*'], {
      root: path.resolve(__dirname),
      exclude: ['asset', 'data'],
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
    }),
  ],
})
