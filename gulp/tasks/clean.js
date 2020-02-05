module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del([
            $.path.paths.build,
            $.path.paths.dataDest,
        ]);
    });
};
