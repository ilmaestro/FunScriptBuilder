var gulp = require('gulp'),
    //watch = require('gulp-watch'),
    //shell = require('gulp-shell'),
    run = require('gulp-run'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

var fsi = new run.Command('fsharpi');

gulp.task('default', ['fs', 'webserver', 'watch']);

gulp.task('fs', function(cb) {
    gutil.log("Compiling F# Scripts...");
    run("fsharpi ./build.fsx").exec([], cb);
        //.on('end', cb);
});

gulp.task('watch', function() {
    gulp.watch('Src/**/*.fsx', ['fs']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'wwwroot',
    port: 8888,
    livereload: true
  });
});