module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src($.path.paths.stylesSource + 'style.scss')
            .pipe($.gp.sassGlob($.styleConfig.ignore))
            .pipe($.gp.sass($.styleConfig.sass))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'styles',
                    message: error.message
                };
            }))
            .pipe($.gp.postcss($.processors))
            .pipe($.gp.rename('style.css'))
            .pipe($.gulp.dest($.path.paths.stylesDest))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};
