module.exports = function () {
    $.gulp.task('fonts', function () {
        return $.gulp.src($.path.paths.fontsSource + '**/**/*.{oet,eot,svg,ttf,woff,woff2,css}')
            .pipe($.gulp.dest($.path.paths.fontsDest));
    });
};
