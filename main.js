const { app, BrowserWindow } = require('electron')

function createWindow() {
  win = new BrowserWindow({
    width: 1512,
    height: 982,
    transparent:true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.maximize();
  win.loadFile('googly.html') // Replace 'your-app.html' with the actual file name of your HTML file

  // Uncomment the line below if you want to open the DevTools by default
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

