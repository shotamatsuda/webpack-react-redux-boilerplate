// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'js', 'main.jsx'),
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
                'es2015',
                'es2016',
                'es2017',
                'stage-3',
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
                'es2015',
                'es2016',
                'es2017',
                'stage-3',
                'react',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
            ],
          }),
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'stylus-loader',
                options: { sourceMap: true }
              },
            ],
          }),
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'src'),
        from: 'index.html',
        to: '',
      },
    ]),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
}
