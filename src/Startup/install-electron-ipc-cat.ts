/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'close-sidebar-on-mobile';
exports.platforms = ['browser'];
// modules listed in https://tiddlywiki.com/dev/#StartupMechanism
// not blocking rendering
exports.after = ['rootWidget'];
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error Property 'service' does not exist on type 'Window & typeof globalThis'.ts(2339)
if (typeof window !== 'undefined' && window.service !== undefined) {
  require('./electron-ipc-cat');
}
