'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint-loader',
  exclude: [/node_modules/, /typings/],
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'react-hot-loader/webpack!awesome-typescript-loader',
  exclude: [/node_modules/, /typings/],
};

exports.ts = {
  test: /\.ts?$/,
  loader: 'react-hot-loader/webpack!awesome-typescript-loader',
  exclude: [/node_modules/, /typings/],
};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: [/node_modules/, /typings/],
};

exports.scss = {
  test: /\.scss$/,
  loader: 'style-loader!css-loader?-minimize!sass-loader',
  exclude: [/node_modules/, /typings/],
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader?-minimize',
  exclude: /src\/app\/styles\/bootstrap-glyphicons.css/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.fontLoader = {
  test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  loader: 'file-loader',
};

exports.imageLoader = {
  test: /\.(png|jpg)$/, 
  loader: 'url-loader?limit=100000',
}

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url-loader?limit=100000',
    exclude: [
      /node_modules/,
      /typings/,
    ],
  };
}
