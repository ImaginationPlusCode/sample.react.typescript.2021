const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

// processes index.html
const htmlPlugin = new HtmlWebPackPlugin({ template: 'public/index.html' });

// Copy the public folder to dist
// ignore index.html it gets processsed by htmlplugin
const copyPlugin = new CopyWebPackPlugin({
    patterns: [
        {
            from: 'public/',
            filter: (filePath) => {
                console.log(filePath);
                return !filePath.includes('index.html');
            },
        },
    ],
});

module.exports = {
    // Our application entry point.
    entry: './src/index.tsx',

    // These rules define how to deal
    // with files with given extensions.
    // For example, .tsx files
    // will be compiled with ts-loader,
    // a spcific loader for webpack
    // that knows how to work with TypeScript files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(config)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' },
            },
        ],
    },

    // Telling webpack which extensions
    // we are interested in.
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // What file name should be used for the result file,
    // and where it should be palced.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Use the html plugin.
    plugins: [htmlPlugin, copyPlugin],
};
