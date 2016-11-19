var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var config = require('../config');

gulp.task('sass', function() {
  var processors = [
    cssnext()
  ];
  gulp.src(config.entryFiles.css)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.destDirs.css));
});
