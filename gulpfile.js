var gulp = require('gulp'),
    run = require('gulp-run'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

gulp.task('default', ['fs', 'webserver', 'watch']);

gulp.task('fs', function(cb) {
    gutil.log("Compiling F# Scripts...");
    run("fsharpi ./build.fsx").exec([], cb);
});

gulp.task('watch', function() {
    gulp.watch('Src/**/*.fsx', ['fs']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'wwwroot'
  });
});