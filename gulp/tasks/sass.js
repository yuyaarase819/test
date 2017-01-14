var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename')
var config = require('../config');

gulp.task('sass', function () {
  gulp.src(config.entryFiles.css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({
      basename: "bundle",
    }))
    .pipe(sourcemaps.write("../sourcemaps"))
    .pipe(gulp.dest(config.destDirs.css));
});
