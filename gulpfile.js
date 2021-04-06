const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css/'))
})

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'))
})