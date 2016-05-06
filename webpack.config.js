var path = require("path")
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
        Global: './app_name/static/src/js/global.js', // change this to the project name 
        Home: './app_name/static/src/js/home.js', // change this to the project name 
        // Careers: './app_name/static/src/js/careers.js',
        // Contact: './app_name/static/src/js/contact.js',
        // Locations: './app_name/static/src/js/locations.js',
        // Services: './app_name/static/src/js/services.js',
        // About: './app_name/static/src/js/about.js'
    },

    output: {
        path: path.resolve('./app_name/static/dist'), // change this to the project name 
        filename: "[name].js"
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new BrowserSyncPlugin({
            proxy: {
                target: "127.0.0.1:9999", // change this to the server generally 127.0.0.1:8000 
            },
        })
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /vendor[\\/].+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            // {
            //     test: /\.js$/,
            //     loader: 'uglify'
            // },
        ] // add all common loaders here
    },
}
