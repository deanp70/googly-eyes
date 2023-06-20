const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  win = new BrowserWindow({
    width: width,
    height: height,
    transparent:true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setIgnoreMouseEvents(true, { forward: true }); // Allow clicks to pass through
  win.maximize();
  win.loadFile('googly.html') // Replace 'your-app.html' with the actual file name of your HTML file

  // Uncomment the line below if you want to open the DevTools by default
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

