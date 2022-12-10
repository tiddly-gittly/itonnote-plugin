/**
Copy from $:/themes/nico/notebook-mobile/js/notebookSidebarNav.js

Closes the  sidebar on mobile when navigating
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.name = 'close-sidebar-on-mobile';
exports.platforms = ['browser'];
// modules listed in https://tiddlywiki.com/dev/#StartupMechanism
// not blocking rendering
exports.after = ['rootwidget'];
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

const isOnMobile = () => {
  // TODO: use https://github.com/Jermolene/TiddlyWiki5/pull/6675 after next release
  if (typeof navigator !== 'undefined') {
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
      // true for mobile device
      return true;
    }
    const mobileBreakpointWidth = $tw.wiki.getTiddler('$:/themes/tiddlywiki/vanilla/metrics/sidebarbreakpoint')?.fields?.text ?? '0px';
    if (window.innerWidth < Number(mobileBreakpointWidth.replace('px', ''))) {
      return true;
    }
  }
  return false;
};

const closeSidebar = () => {
  $tw.wiki.addTiddler({ title: '$:/state/sidebar', text: 'no' });
  $tw.wiki.addTiddler({ title: '$:/state/notebook-sidebar', text: 'no' });
};

const closeSidebarOnMobile = () => {
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
