module.exports = [
    $.autoprefixer({ grid: true }),
    $.pxtorem({
        propList: ['*', '!border'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    }),
    $.mqpacker({
        sort: $.sortCSSmq
    }),
    $.inlineSvg(),
];
