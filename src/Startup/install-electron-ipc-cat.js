/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'install-electron-ipc-cat';
exports.platforms = ['browser'];
exports.after = ['startup'];
exports.synchronous = true;
exports.startup = function () {
  if ('service' in window && 'descriptors' in window.service && window.service.descriptors !== undefined) {
    require('$:/plugins/linonetwo/itonnote/Startup/electron-ipc-cat.js');
  }
};
