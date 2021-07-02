
const {app, BrowserWindow} = require('electron')
const path = require('path')




function createWindow () {



  const mainWindow = new BrowserWindow({

    backgroundColor: '#000' ,
    
  
    titleBarStyle: "hidden",
    width: 900,
    height: 650,
    icon: path.join(__dirname, '/assets/youtubeicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: true,
      
    }
  })

  

 
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadURL('https://music.youtube.com/', {userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36'})


 
  
  mainWindow.setThumbarButtons([
  
    {
      tooltip: 'button1',
      icon: path.join(__dirname, 'assets/taskbar/faixaanterior.png'),
      click () { console.log('button1 clicked') }
    },
    {
      tooltip: 'button2',
      icon: path.join(__dirname, 'assets/taskbar/play-pause.png'),
      click () { console.log('button1 clicked') }
    },
    {
      tooltip: 'button3',
      icon: path.join(__dirname, 'assets/taskbar/proximafaixa.png'),
      click () { console.log('button1 clicked') }
    }
  ])
  


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






