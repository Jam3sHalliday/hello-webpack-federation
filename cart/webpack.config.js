const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index.js',
            },
            shared: ['faker'],

            // singleton loading
            // shared: {
            //     faker: {
            //         singleton: true,
            //     }
            // },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}