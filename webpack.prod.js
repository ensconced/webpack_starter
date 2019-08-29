const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { importLoaders: 1 } },
];

module.exports = merge(common, {
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.scss$/,
        use: cssLoaders.concat(['sass-loader']),
      },
    ],
  },
});
