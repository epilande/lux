const { app, Menu, Tray } = require('electron');

let tray = null;

app.on('ready', () => {
  app.dock.hide();

  tray = new Tray(`${__dirname}/IconTemplate.png`);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Lux v0.1',
      enabled: false,
    },
    {
      label: 'Start',
      click: menuItem => {
        menuItem.visible = false;
        contextMenu.items[2].visible = true;
      },
    },
    {
      label: 'Stop',
      visible: false,
      click: menuItem => {
        menuItem.visible = false;
        contextMenu.items[1].visible = true;
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    },
  ]);

  tray.setToolTip('Lux');
  tray.setContextMenu(contextMenu);
});
