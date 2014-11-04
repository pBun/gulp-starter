var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var minifycss = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config = require('../config');
var sassConfig = require('../config').sass;

gulp.task('sass', ['images'], function () {
  return gulp.src(sassConfig.src)
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../styles'
    }))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulpif(global.isProduction, minifycss()))
    .on('error', handleErrors)
    .pipe(gulp.dest(sassConfig.dest));
});
