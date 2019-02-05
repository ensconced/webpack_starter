const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const postcssPresetEnv = require('postcss-preset-env');

const cssLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { importLoaders: 1 } },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        postcssPresetEnv(/* pluginOptions */)
      ],
    }
  },
];

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
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
