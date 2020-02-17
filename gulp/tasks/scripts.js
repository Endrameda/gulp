module.exports = function () {

    $.gulp.task('scripts', function () {
        return $.gulp.src($.path.paths.jsSource + 'app.js')
            .pipe($.webpackStream($.webpackConfig), $.webpack)
            .pipe($.gulpif($.isProd, $.gp.uglify()))
            .pipe($.gulp.dest($.path.paths.jsDest))
            .pipe($.gulpif(!$.isProd, $.bs.reload({
                stream: true
            })));
    });
};
