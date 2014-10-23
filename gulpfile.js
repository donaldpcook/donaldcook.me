var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch');

gulp.task('webserver', function() {
  gulp.src('dest')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('move', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('styles', function() {
  return gulp.src('app/sass/app.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/index.html', ['move']);
});

gulp.task('default', ['styles', 'move', 'watch']);
