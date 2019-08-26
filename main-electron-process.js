const { app, BrowserWindow } = require('electron');
const startWebpackDevServer = require('./start-dev.js');

const isDev = process.mainModule.filename.indexOf('app.asar') === -1;

if (isDev) {
  startWebpackDevServer().then((port) => {
    app.on('ready', () => {
      const window = new BrowserWindow();
      window.loadURL(`http://localhost:${port}`);
    });
  });
} else {
  // TODO - in production, we'll want to load the build index.html
  // using window.loadFile instead...
}
