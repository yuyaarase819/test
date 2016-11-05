var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function() {
  gulp.src(config.entryFiles.css)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(config.destDirs.css));
});
