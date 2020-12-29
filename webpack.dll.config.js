'use strict';

const path = require('path');
const webpack = require('webpack');

const outputDirDll = path.join(__dirname, 'public', 'dll');

module.exports = {
  context: process.cwd(),
  entry: {
    'react': [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux'
    ],
    'core': [
      'es6-promise',
      'lodash',
    ]
  },

  output: {
    filename: '[name].dll.js',
    path: outputDirDll,
    sourceMapFilename: '[name].dll.js.map',
    library: '[name]',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(outputDirDll, '[name]-manifest.json'),
    }),
  ],
};
