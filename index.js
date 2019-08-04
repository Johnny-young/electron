const { app, BrowserWindow } = require('electron')

// 取消警告
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

let win;

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html
  // win.loadFile('index.html')
  win.loadURL('http://192.168.199.182:3300/')

  // 打开开发者工具
  // win.webContents.openDevTools()

  // 当window被关闭
  win.on('closed', () => {
    // 取消window对象的引用，回收垃圾
    win = null
  })

}

// 初始化
app.on('ready', createWindow)

// 全部窗口关闭时退出
app.on("window-all-closed", () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on("activate", () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})