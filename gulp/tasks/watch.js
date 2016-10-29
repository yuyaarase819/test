var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function(){
    gulp.watch(config.src + '/scss/*.scss', ['sass']);
    gulp.watch(config.src + '/js/*.js', ['webpack']);
    gulp.watch(config.src + '/js/*.jsx', ['webpack']);
});
