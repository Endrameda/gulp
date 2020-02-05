module.exports = function () {
    $.gulp.task('module', function () {
        return $.gulp.src($.path.paths.moduleSource + '**/**/*.*')
            .pipe($.gulp.dest($.path.paths.moduleDest));
    });
};
