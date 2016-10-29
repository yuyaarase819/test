const webpack = require("webpack");
const path = require('path');

var base = './public';
var dest = base + '/assets';
var src = './src';

/*
 *  requireを通じてアクセス可能になる記法(Node.js)
 */
module.exports = {
  // 出力先の
  dest: dest,
  src: src,
  base: base,

  // jsのビルド
  js: {
    dest: dest + '/js',
    uglify: false
  },

  // webpack
  webpack:{
    devtool: "#source-map",
    entry: src + '/js/app.js',
    output: {
      filename: 'app.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  },

  // SASS
  scss:{
    src:src+'/scss/**/*',
    dest:dest+'/css'
  }
}
