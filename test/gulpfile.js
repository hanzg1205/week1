const gulp = require('gulp');
const webserver = require('gulp-webserver');
const gulpSass = require('gulp-sass');
const minCss = require('gulp-clean-css');

gulp.task('scss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(gulpSass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})