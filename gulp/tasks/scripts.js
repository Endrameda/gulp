module.exports = function () {

    $.gulp.task('scripts', function () {
        return $.gulp.src($.path.paths.jsSource + 'app.js')
            .pipe($.webpackStream($.webpackConfig), $.webpack)
            .pipe($.gulp.dest($.path.paths.jsDest))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};
