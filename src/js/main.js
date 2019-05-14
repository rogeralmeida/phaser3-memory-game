"use strict";

const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({ 
    width: 1280,
    height: 720,
  })

  win.webContents.openDevTools()
  // and load the index.html of the app.
  let basePage = `file://${__dirname}/../../dist/index.html`
  console.log(`basePage: ${basePage}`)
  win.loadURL(basePage);
}

app.on('ready', createWindow)