module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src($.path.paths.imgSource + '**/**/*.{png,jpg,gif,svg}')
            .pipe($.gp.imagemin([
                $.gp.imagemin.gifsicle({
                    interlaced: true,
                }),

                $.imageminMozJpeg({
                    progressive: true,
                    quality: 85
                }),

                $.imageminPngQuant({
                    speed: 2,
                    quality: [0.6, 0.8]
                }),
            ]))
            .pipe($.gulp.dest($.path.paths.imgDest));
    });
};
