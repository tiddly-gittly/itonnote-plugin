/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'install-electron-ipc-cat';
exports.platforms = ['browser'];
exports.after = ['startup'];
exports.synchronous = false;
exports.startup = () => {
  try {
    if ('service' in window && window.service?.descriptors !== undefined) {
      require('$:/plugins/linonetwo/itonnote/Startup/electron-ipc-cat.js');
    }
  } catch (error) {
    console.error('Error when itonnote-plugin install-electron-ipc-cat:', error);
  }
};
