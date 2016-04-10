module.exports = {
    entry: "./src/js/app.js", 
    output: {
        path: "./dist/js/",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: 'es2015'
                }
            }
        ]
    }
};