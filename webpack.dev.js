const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const cssLoaders = [
  'style-loader',
  { loader: 'css-loader', options: { importLoaders: 1 } },
];

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
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
