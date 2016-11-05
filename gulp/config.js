var docroot = './public';
var assets = docroot + '/assets';
var src = './src';

module.exports = {
  docroot: docroot,
  assets: assets,
  src: src,

  destDirs : {
    js:assets + "/js",
    css:assets+'/css',
    html:docroot,
  },

  entryFiles : {
    js:src + "/js/app.js",
    css:src + '/scss/**/*',
    html:src + '/pug' + '/*.pug',
  }

}
