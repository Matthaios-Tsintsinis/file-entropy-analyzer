const { app, BrowserWindow } = require("electron");

// if ("serviceWorker" in navigator) {
//   // register service worker
//   navigator.serviceWorker.register("service-worker.js");
//   }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });
  try {
    require("electron-reloader")(module);
  } catch (_) {}
  win.loadFile("./src/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
