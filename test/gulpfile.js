const gulp = require('gulp');
const webserver = require('gulp-webserver');
const gulpSass = require('gulp-sass');
const minCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('scss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(gulpSass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
})
gulp.task('js', () => {
    return gulp.src('./src/scripts/*.js')
        .pipe(babel({
            presets: 'es2015'
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'))
})
gulp.task('webserver', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 9090,
            livereload: true,
            proxies: [{
                source: '/list',
                target: 'http://localhost:3000/list'
            }]
        }))
})
gulp.task('dev', gulp.parallel('watch', 'webserver'))