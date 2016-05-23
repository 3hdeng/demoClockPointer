const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'built');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const config = {    
    //Entry points to the project
    entry: [
        path.join(__dirname, '/app.js'),
    ],
    //Config options on how to interpret requires imports
    resolve: {
        extensions: ["", ".js", ".jsx"]
        //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    //Server Configuration options
    devServer:{
        contentBase: 'www',  //Relative directory for base of server
        devtool: 'eval',
        hot: true,        //Live-reload
        inline: true,
        port: 3000,        //Port Number
        host: 'localhost',  //Change to '0.0.0.0' for external facing server
    },
    devtool: 'eval',
    output: {
        path: buildPath,    //Path of output file
        filename: 'app.js',
    },
    plugins: [
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
        {
            //React-hot loader and
            test: /\.(js|jsx)$/,  //All .js or .jsx  files
            loaders: ['react-hot', 'babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
            exclude: [nodeModulesPath],

        },
        ],
    },

};

module.exports = config;
