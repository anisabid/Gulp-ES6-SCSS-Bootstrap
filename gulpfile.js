var gulp = require('gulp'),
    path = require('path'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    preprocess = require('gulp-preprocess'),
    config = require('./gulp.config')();


gulp.task('build-clean', function () {
    var clean = require('gulp-clean');
    return gulp.src(config.dist, {read: false})
        .pipe(clean());
});


gulp.task('build-libs', function () {
    config.lib.forEach(function (lib, index, array) {
        gulp.src(lib.src)
            .pipe(
                gulp.dest(
                    path.join(config.js.output, lib.dist)
                )
            )
    });
    return true;
});

gulp.task('build-scripts', function () {
    var uglify = require('gulp-uglify');
    var gutil = require('gulp-util');

    var jsResult = gulp.src(config.js.input)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(config.js.output))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest(config.js.output))
        .on('error', gutil.log);

    return jsResult;

});

gulp.task('build-styles', function () {
    var sass = require('gulp-sass');

    var sassCssResult = gulp.src(config.sass.input)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(config.sass.output))
        .pipe(
            sass({
                outputStyle: 'compressed',
                compress: true
            }).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.sass.output));

    return sassCssResult;
});

gulp.task('build-img', function () {

    imgResult = gulp.src(config.img.input).pipe(gulp.dest(config.img.output));
    return imgResult;

});

gulp.task('build', function (callback) {
    runSequence('build-clean',
        ['build-img', 'build-libs', 'build-scripts', 'build-styles'],
        callback);
});

gulp.task('serve', ['build'], function () {

    gulp.watch([config.img.watch], ['build-img']);
    gulp.watch([config.js.watch], ['build-scripts']);
    gulp.watch([config.sass.watch], ['build-styles']);

    browserSync({
        port: 6600,
        files: ['./dist/**/*.js', './dist/**/*.css'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./']
        }
    });
});

gulp.task('default', ['serve']);