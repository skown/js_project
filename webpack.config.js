const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/javascript-learning/index.ts',
    background: './src/chrome-extension/background.ts',
    contentscript: './src/chrome-extension/contentscript.ts',
    popup: './src/chrome-extension/popup.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{from: 'src/chrome-extension/static', to: '.'}],
    }),
  ],
};
