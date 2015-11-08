'use strict';

var gulp = require('gulp');
var runSeq = require('run-sequence');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('reload', function() {
  livereload.reload();
});
gulp.task('reloadCSS', function () {
  return gulp.src('./public/style.css').pipe(livereload());
});

gulp.task('buildJS', function() {
  return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});

gulp.task('build', function() {
  if (process.env.NODE_ENV === 'production') {
  } else runSeq('buildJS');
});
gulp.task('buildCSS', function (done) {
  var sassComponent = sass();
  sassComponent.on('error', function (e) {
    console.error(e);
    done(e);
  });
  return gulp.src('./browser/scss/main.scss')
    .pipe(sassComponent)
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', function() {
  livereload.listen();
  gulp.start('build');

  gulp.watch('browser/js/**', function () {
    runSeq('buildJS', 'reload');
  });

  gulp.watch('browser/scss/**', function () {
    runSeq('buildCSS', 'reloadCSS');
  });
});
