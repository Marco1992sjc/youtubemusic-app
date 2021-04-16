// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/youtubeicon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
      
    }
  })

 

  mainWindow.loadURL('https://music.youtube.com/', {userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36'})
}


app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

