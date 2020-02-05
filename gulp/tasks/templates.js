module.exports = function () {
    $.gulp.task('templates', function () {
        return $.gulp.src($.path.paths.templatesSource + '*.pug')
            .pipe($.gp.pug({
                locals: {
                    content: JSON.parse($.fs.readFileSync('./dataTemp/data.json', 'utf8'))
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'templates',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest($.path.paths.templatesDest))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};
