const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "icons/[hash][ext][query]",
    clean: true,
  },
  watchOptions: {
    ignored: ['**/dist/index.html'],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  module: {
  rules:[
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.png$/i,
      type: 'asset/resource',
      generator: {
        filename:'icons/[hash][ext][query]',
      }
    }
  ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};