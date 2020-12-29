'use strict';

const path = require('path');

const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

const sourcePath = path.join(__dirname, './src');

const applicationEntries = process.env.NODE_ENV === 'development' ? [] : [];

module.exports = {
  context: sourcePath,
  entry: ['./app/index.tsx'].concat(applicationEntries),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: [
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ]
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: { index: '/' },
    proxy: { '/api/*': "http://localhost:4000/" },
    port: 3002,
  },
  module: {
    loaders: [
      loaders.tslint,
      loaders.tsx,
      loaders.html,
      loaders.scss,
      loaders.css,
      loaders.fontLoader,
      loaders.json,
      loaders.imageLoader,
    ],
  },
  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  }
};
