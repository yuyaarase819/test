var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.base
        }
    })
    gulp.watch(config.dest + "/**/**", function() {
        browserSync.reload();
    });
});
