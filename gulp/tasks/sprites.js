module.exports = function () {
    $.gulp.task('spritePNG', function () {
        let spriteData = $.gulp.src($.path.paths.spritePNGSource + '**/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite-DO-NOT-EDIT.scss',
                cssFormat: 'scss',
                cssTemplate: 'gulp/config/png_template_sprite.mustache',
                cssVarMap: function (sprite) {
                    sprite.name = 's-' + sprite.name;
                },
                padding: 70
            }));
        spriteData.img.pipe($.gulp.dest($.path.paths.spritePNGDest));
        spriteData.css.pipe($.gulp.dest($.path.paths.spritePNGCssDest));
        return spriteData;
    });

    $.gulp.task('spriteSVG', function () {
        return $.gulp.src($.path.paths.spriteSVGSource + '*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {
                    xmlMode: true
                }
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: '../../svg/sprite.svg',
                        render: {
                            scss: {
                                dest: '../../../../src/css/base-components/icon-generated-DO-NOT-EDIT.scss',
                                template: 'gulp/config/svg_template_sprite.scss'
                            }
                        }
                    }
                }
            }))
            .pipe($.gulp.dest($.path.paths.spriteSVGDest));
    });
};
