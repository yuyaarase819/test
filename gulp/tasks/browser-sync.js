var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.docroot
        }
    })
    gulp.watch(`${config.assets}/**/**`, function() {
        browserSync.reload();
    });

});
