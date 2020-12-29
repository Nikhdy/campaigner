'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const isProduction = true;
const outPath = path.join(__dirname, './dist');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePlugins = [
  new webpack.LoaderOptionsPlugin({
    debug: true,
    options: {
      context: sourcePath
    }
  }),
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'NODE_ENV': JSON.stringify('production'),
  }),
  new HtmlWebpackPlugin({
    template: './app/index.html',
    inject: 'body',
    chunksSortMode: 'dependency',
  }),
  new webpack.NoEmitOnErrorsPlugin()
];

const devPlugins = [
  // start: DLL config
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('../public/dll/core-manifest.json'),
  }),
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('../public/dll/react-manifest.json'),
  }),
  new AddAssetHtmlPlugin(
    [
      { filepath: require.resolve('../public/dll/core.dll.js') }, 
      { filepath: require.resolve('../public/dll/react.dll.js') }
    ]
  ),
  // end: DLL config
  new CopyWebpackPlugin([{
    from: 'app/assets',
    to: 'assets'
  }, ])
];

const safePlugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      context: sourcePath
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: Infinity
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    disable: !isProduction
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    template: 'app/index.html'
  }),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    deadCode: true,
    compress: {
      warnings: false,
      pure_getters: true,
      dead_code: true,
      screw_ie8: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      unused: true,
    },
    comments: false,
    sourceMap: false,
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8,
  })
];

const prodPlugins = [
  new CopyWebpackPlugin([{
    from: './app/assets',
    to: 'assets'
  }, ]),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new SplitByPathPlugin([{
    name: 'vendor',
    path: [path.join(__dirname, '..', 'node_modules/')]
  }, ]),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    deadCode: true,
    compress: {
      warnings: false,
      pure_getters: true,
      dead_code: true,
      screw_ie8: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      unused: true,
    },
    comments: false,
    sourceMap: false,
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8,
  })
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);