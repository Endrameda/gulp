module.exports = function () {
    $.gulp.task('data', function () {
        return $.gulp.src($.path.paths.dataSource + '**/*.json')
            .pipe($.merge({
                fileName: 'data.json',
            }))
            .pipe($.gulp.dest($.path.paths.dataDest));
    });
};
