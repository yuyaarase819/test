var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function() {
  gulp.src(config.scss.src)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(config.scss.dest));
});
