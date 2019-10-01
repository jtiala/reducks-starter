const path = require('path');
const webpack = require('webpack');
const flexbugs = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const publicPath = process.env.PUBLIC_PATH || '/';

const webpackConfig = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath,
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]_[hash:base64:5]',
              },
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
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: 'public' }]),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      publicPath,
    }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      PUBLIC_PATH: '/',
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      cacheId: 'reducks-starter',
      navigateFallback: '/index.html',
    }),
  ],
};

if (isDev) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.devServer = {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
  };
}

module.exports = webpackConfig;
