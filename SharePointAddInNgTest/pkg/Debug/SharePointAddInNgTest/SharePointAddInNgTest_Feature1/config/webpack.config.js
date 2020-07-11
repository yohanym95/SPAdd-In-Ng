'use strict'
const path = require('path')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const hashing = require('./hashing')

const helpers = require('./helpers')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/_layouts/15/AngularTest/public/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file?name=assets/[name].[hash].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src') // location of your src
    ),
    new hashing({
      entry: './Pages/Default.aspx',
      output: './Pages/Default.aspx'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!App.js',
        '!Elements.xml',
        '!jquery*',
        '!SharePointProjectItem.spdata'
      ]
    })
  ]
}
