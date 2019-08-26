const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.js');
const findFreePort = require('find-free-port');

// find a free port that is >= 3000
async function getFreePort() {
  try {
    const freePorts = await findFreePort(3000);
    return freePorts[0];
  } catch (err) {
    console.log(err);
    throw new Error('failed to find a free port');
  }
}

async function main() {
  const port = await getFreePort();
  // set the port
  const devServerOptions = {
    contentBase: './dist',
  };
  // start webpack dev server
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, devServerOptions);
  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      console.log(`starting server on http://localhost:${port}`);
      resolve(port);
    });
  });
}

module.exports = main;