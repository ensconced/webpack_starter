require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const http = require('http');

const isDev = process.mainModule.filename.indexOf('app.asar') === -1;

if (isDev) {
  app.on('ready', () => {
    attemptConnect();
  });
} else {
  // TODO - in production, we'll want to load the build index.html
  // using window.loadFile instead...
}

function attemptConnect() {
  http.get(`http://localhost:${process.env.PORT}`, () => {
    const window = new BrowserWindow();
    window.loadURL(`http://localhost:${process.env.PORT}`);
  }).on('error', () => {
    setTimeout(attemptConnect, 1000);
  });
}
