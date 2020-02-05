module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch($.path.paths.templatesSource + '**/*.pug', $.gulp.series('templates'));

        $.gulp.watch($.path.paths.stylesSource + '**/*.scss', $.gulp.series('styles'));
        $.gulp.watch($.path.paths.stylesSource + '**/*.scss', $.gulp.series('style-lint'));

        $.gulp.watch($.path.paths.jsSource + '**/**/*.js', $.gulp.series('scripts'));

        $.gulp.watch($.path.paths.fontsSource + '**/**/*.{oet,eot,svg,ttf,woff,woff2}', $.gulp.series('fonts'));

        $.gulp.watch($.path.paths.imgSource + '**/**/*.{png,jpg,gif,svg}', $.gulp.series('img'));

        $.gulp.watch($.path.paths.favSource + '*.{png,xml,ico,json,svg}', $.gulp.series('favicon'));

        $.gulp.watch($.path.paths.spritePNGSource + '*.png', $.gulp.series('spritePNG'));

        $.gulp.watch($.path.paths.spriteSVGSource + '*.svg', $.gulp.series('spriteSVG'));

        $.gulp.watch($.path.paths.moduleSource + '**/**/*.*', $.gulp.series('module'));

        $.gulp.watch($.path.paths.dataSource + '**/*.json', $.gulp.series('data', 'templates'));
    });
};
