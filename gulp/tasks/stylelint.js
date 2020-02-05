module.exports = function () {
    $.gulp.task('style-lint', async function () {
        return $.gulp.src($.path.paths.stylesSource + '**/*.scss')
            .pipe($.stylelint({
                failAfterError: false,
                debug: true,
                reporters: [
                    { formatter: 'string', console: true }
            ]
            }))
    });
};
