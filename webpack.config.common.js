// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = mode => ({
  mode,
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, 'src', 'js', 'main.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2016',
                'es2017',
                'stage-3',
                'stage-2',
              ],
            },
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2016',
                'es2017',
                'stage-3',
                'stage-2',
                'react',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist/**/*'], {
      root: path.resolve(__dirname),
      exclude: ['asset', 'data'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
})
