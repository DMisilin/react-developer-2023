const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');


const port = 3030;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  target: 'web',
  stats: 'minimal',
  ignoreWarnings: [/export .* was not found in/],
  output: {
    path: dist,
    publicPath: `https://dmisilin.github.io/react-developer-2023/`,
    filename: `js/[name].js`,
    chunkFilename: `js/[name].js`,
  },
  devServer: {
    port,
    hot: true,
    historyApiFallback: true,
    host,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    runtimeChunk: true,
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      src: path.resolve('./src'),
    },
    fallback: { crypto: false },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        exclude: '/node_modules/',
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};