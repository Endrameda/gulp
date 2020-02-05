module.exports = function () {
    $.gulp.task('favicon', function () {
        return $.gulp.src($.path.paths.favSource + '*.{png,xml,ico,json,svg,webmanifest}')
            .pipe($.gulp.dest($.path.paths.favDest));
    });
};
