var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: '无极麻辣油',
        // Load a custom template (lodash by default)
        template: './src/index.html'
    })]
};