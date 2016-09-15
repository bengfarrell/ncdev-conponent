var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
//var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('ncdev-purejs', function () {
    return browserify({
        entries: 'src/ncdev-purejs.es6',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('src/ncdev-purejs.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('ncdev-htmlimports', function () {
    return browserify({
        entries: 'src/ncdev-htmlimports.es6',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('src/ncdev-htmlimports.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('ncdev-conponent', function () {
    return browserify({
        entries: 'src/ncdev-conponent.es6',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('src/ncdev-conponent.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('ncdev-conponent-extended', function () {
    return browserify({
        entries: 'src/ncdev-conponent-extended.es6',
        extensions: ['es2015'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('src/ncdev-conponent-extended.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['ncdev-purejs', 'ncdev-htmlimports', 'ncdev-conponent', 'ncdev-conponent-extended']);