const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
  },
  devServer: {
    contentBase: './',
    port: 9000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
