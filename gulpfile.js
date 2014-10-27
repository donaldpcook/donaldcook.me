var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch');

gulp.task('webserver', function() {
  connect.server({
    root: 'dest',
    livereload: true
  });
});

gulp.task('move', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dest'));

  gulp.src('app/js/animation.js')
    .pipe(gulp.dest('dest/js'));
});

gulp.task('styles', function() {
  return gulp.src('app/sass/app.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('livereload', function() {
  gulp.src()
    .pipe(watch(['dest/css/*.css']))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/index.html', ['move']);
  gulp.watch('app/js/animation.js', ['move']);
});

gulp.task('default', ['styles', 'move', 'webserver', 'livereload', 'watch']);
