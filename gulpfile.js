var gulp = require('gulp');
var less = require('gulp-less');
var csscomb = require('gulp-csscomb');
var uncss = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');

// Compiling the CSS from less
gulp.task('less', function () {
  return gulp.src('./assets/less/theme.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css/big'));
});

// Sorting the CSS
gulp.task('styles', ['less'], function () {
  return gulp.src('./assets/css/big/theme.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./assets/css/combed'));
});

// Removing unused classes in CSS
gulp.task('uncss', ['styles'], function () {
  return gulp.src('./assets/css/combed/theme.css')
    .pipe(uncss({
      html: ['./docs/*.html'],
      ignore: [/fp/],
      timeout: 1000
    }))
    .pipe(gulp.dest('./assets/css/uncss/'));
});

// Removing tabs and spaces in CSS
gulp.task('minify-css', ['uncss'], function () {
  return gulp.src('assets/css/uncss/theme.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('assets/css/'));
});

// Run all the tasks above in the following fixed sequence
gulp.task('css', ['less', 'styles', 'uncss', 'minify-css']);