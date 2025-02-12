const { getCurrentWindow } = window.__TAURI__.window;

const appWindow = getCurrentWindow();

document.getElementById('closer')?.addEventListener('click', () => {
    appWindow.close()
});
