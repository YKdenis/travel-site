const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const cssVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const plumber = require('gulp-plumber');

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(plumber())
        .pipe(postcss([cssImport, mixins, cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/assets/temp/styles'));
});