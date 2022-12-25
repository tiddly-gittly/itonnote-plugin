/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'close-sidebar-on-mobile';
exports.platforms = ['browser'];
// modules listed in https://tiddlywiki.com/dev/#StartupMechanism
// not blocking rendering
exports.after = ['rootWidget'];
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

exports.startup = () => require('./electron-ipc-cat');
