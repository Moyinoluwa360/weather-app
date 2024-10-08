const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html'
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]'
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ],
  },
};
