const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SRC_DIR = path.join(__dirname, '..', 'src');

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: extractPlugin.extract({
          use: ['css-loader']
        })
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [ 
    extractPlugin,
    new HtmlWebpackPlugin() 
  ],
};
