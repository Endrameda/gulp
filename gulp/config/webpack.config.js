const webpack = require("webpack");

module.exports = {
    output: {
        filename: 'script.min.js',
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc'
                }
            }]
        }]
    },
    /*externals: {
        jquery: 'jQuery'
    },*/
    plugins: [
        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "jquery": "jquery",
            "window.jquery": "jquery",
            "$": "jquery",
            "window.$": "jquery"
        })
    ],
};
