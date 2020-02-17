module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src($.path.paths.stylesSource + 'style.scss')
            .pipe($.gulpif(!$.isProd, $.gp.sourcemaps.init()))
            .pipe($.gp.sassGlob($.styleConfig.ignore))
            .pipe($.gp.sass($.styleConfig.sass))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'styles',
                    message: error.message
                };
            }))
            .pipe($.gulpif($.isProd, $.gp.csso()))
            .pipe($.gp.postcss($.processors))
            .pipe($.gulpif(!$.isProd, $.gp.sourcemaps.write()))
            .pipe($.gp.rename('style.min.css'))
            .pipe($.gulp.dest($.path.paths.stylesDest))
            .pipe($.gulpif(!$.isProd, $.bs.reload({
                stream: true
            })));
    });
};
