var gulp = require('gulp');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var plumber = require('gulp-plumber');

gulp.task('pug', function buildHTML() {
  return gulp.src(config.entryFiles.html)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(sourcemaps.write("./assets/sourcemaps"))
    .pipe(gulp.dest(config.destDirs.html));
});
