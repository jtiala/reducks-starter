const path = require('path');
const webpack = require('webpack');
const flexbugs = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [flexbugs, postcssPresetEnv()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/static',
      },
    ]),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.devServer = {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src/static'),
  };
}

module.exports = webpackConfig;
