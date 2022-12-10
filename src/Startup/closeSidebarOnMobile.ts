/**
 Copy from $:/themes/nico/notebook-mobile/js/notebookSidebarNav.js
 
 Closes the  sidebar on mobile when navigating
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'close-sidebar-on-mobile';
exports.platforms = ['browser'];
// modules listed in https://tiddlywiki.com/dev/#StartupMechanism
// not blocking rendering
exports.after = ['render'];
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

const isOnMobile = () => {
  // TODO: use https://github.com/Jermolene/TiddlyWiki5/pull/6675 after next release
  if (typeof navigator !== 'undefined') {
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
      // true for mobile device
      return true;
    }
    const mobileBreakpointWidth = $tw.wiki.getTiddlerText('$:/themes/tiddlywiki/vanilla/metrics/sidebarbreakpoint') ?? '0';
    // DEBUG: console
    console.log(`mobileBreakpointWidth`, mobileBreakpointWidth);
    if (window.innerWidth < Number(mobileBreakpointWidth)) {
      return true;
    }
  }
  return false;
};

const closeSidebar = () => {
  $tw.wiki.setText('$:/state/sidebar', 'text', undefined, 'no');
  $tw.wiki.setText('$:/state/notebook-sidebar', 'text', undefined, 'no');
};

const closeSidebarOnMobile = () => {
  // DEBUG: console
  console.log(`isOnMobile()`, isOnMobile());
  if (isOnMobile()) {
    closeSidebar();
  }
};

const setup = () => {
  $tw.hooks.addHook('th-navigating', function (event) {
    closeSidebarOnMobile();
    return event;
  });
  closeSidebarOnMobile();
};

setup();
