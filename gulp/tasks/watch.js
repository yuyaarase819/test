var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function(){
    gulp.watch(config.src + '/scss/*.scss', ['sass']);
    gulp.watch(config.src + '/pug/*.pug', ['pug']);
    gulp.watch(config.src + '/js/*.js', ['browserify']);
});
