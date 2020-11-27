const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: process.env.NODE_ENV === 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  entry: './src/client.js',
  output: {
    filename: 'app.js',
    path: path.join( __dirname, '../public' ),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
};
