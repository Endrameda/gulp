'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    del: require('del'),
    fs: require('fs'),
    paths: require('path'),
    merge: require('gulp-merge-json'),
    gutil: require('gulp-util'),
    gulpif: require('gulp-if'),
    autoprefixer: require('autoprefixer'),
    mqpacker: require('css-mqpacker'),
    sortCSSmq: require('sort-css-media-queries'),
    pxtorem: require('postcss-pxtorem'),
    inlineSvg: require('postcss-inline-svg'),
    stylelint: require('gulp-stylelint'),
    imageminPngQuant: require('imagemin-pngquant'),
    imageminMozJpeg: require('imagemin-mozjpeg'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    path: {
        tasks: require('./gulp/config/tasks.js'),
        paths: require('./gulp/config/paths.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});
$.webpackConfig = require('./gulp/config/webpack.config.js');
$.processors = require('./gulp/config/processors.js');
$.styleConfig = require('./gulp/config/styleConfig.js');

$.gulp.task('build', $.gulp.series(
    'clean', 'data',
    $.gulp.parallel(
        'style-lint',
        'module',
        'fonts',
        'favicon',
        'img',
        'spriteSVG',
        'spritePNG',
        'templates',
        'styles',
        'scripts'
    )
));

if ($.gutil.env.type === 'build') {
    $.isProd = true;
} else {
    $.isProd = false;
}

$.isDev = !$.isProd;

if ($.isDev) {
    $.gulp.task('default', $.gulp.series(
        'build',
        $.gulp.parallel(
            'watch',
            'serve'
        )
    ));
} else {
    $.gulp.task('default', $.gulp.series(
        'build'
    ));
}


$.gulp.task('tunel', $.gulp.series(
    'build',
    $.gulp.parallel(
        'watch',
        'serve-tunel'
    )
));
