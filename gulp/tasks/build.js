var gulp = require('gulp');

gulp.task('build', ['browserify', 'stylus', 'images', 'assets', 'markup']);
