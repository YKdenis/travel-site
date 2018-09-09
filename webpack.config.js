// Path is a NodeJS module
const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        // generate absolute path bc webpack doesn't work with relative paths
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                // webpack will only apply the loader to .js files
                // the fewer files webpack has to go through the faster it is
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};