var gulp = require('gulp');
var pug = require('gulp-pug');
var config = require('../config');

gulp.task('pug', function buildHTML() {
  return gulp.src(config.entryFiles.html)
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.destDirs.html));
});
