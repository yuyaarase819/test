var gulp = require('gulp');
var pug = require('gulp-pug');
var config = require('../config');

gulp.task('pug', function buildHTML() {
  return gulp.src(config.entryFiles.html)
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest(config.destDirs.html));
});
