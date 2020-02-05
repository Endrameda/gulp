module.exports = function () {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: {
                baseDir: $.path.paths.root
            },
            notify: false
        });
    });
    $.gulp.task('serve-tunel', function () {
        $.bs.init({
            server: {
                baseDir: $.path.paths.root
            },
            tunnel: true,
            notify: false
        });
    });
};
