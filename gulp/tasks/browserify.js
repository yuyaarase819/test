var gulp = require('gulp');
var config = require('../config');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify(config.entryFiles.js, {debug: true})
    .transform(babelify)
    .bundle()
    .on("error", function (err) {console.log("ERROR: " + err.message);})
    .pipe(source('App.js'))
    .pipe(gulp.dest(config.destDirs.js))
});
