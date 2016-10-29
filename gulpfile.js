/**
 *  再帰的にgulp Directoryを読み込み
 *
 */
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
