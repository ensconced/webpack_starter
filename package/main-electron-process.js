require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const http = require('http');
const path = require('path');

const isDev = process.mainModule.filename.indexOf('app.asar') === -1;

let window;

app.on('ready', () => {
  window = new BrowserWindow();
  if (isDev) {
    attemptConnect();
  } else {
    // in production, we'll want to load the build index.html
    // using window.loadFile instead...
    window.loadFile(path.resolve(__dirname, 'dist/index.html'));
  }
});

function attemptConnect() {
  http.get(`http://localhost:${process.env.PORT}`, () => {
    window.loadURL(`http://localhost:${process.env.PORT}`);
  }).on('error', () => {
    setTimeout(attemptConnect, 1000);
  });
}
