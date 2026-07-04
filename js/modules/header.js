// Header Sticky/Scroll Animation Module
let nav = null;
let scrollHandler = null;

export function initHeader(navSelector) {
  nav = document.querySelector(navSelector);
  if (!nav) return;

  scrollHandler = () => {
    const isScrolled = window.scrollY > 24;
    
    // Smooth transitions using values from the new version palette
    if (isScrolled) {
      nav.style.background = 'rgba(244, 241, 234, 0.94)';
      nav.style.borderBottomColor = 'rgba(52, 48, 42, 0.16)';
    } else {
      nav.style.background = 'rgba(244, 241, 234, 0.78)';
      nav.style.borderBottomColor = 'rgba(52, 48, 42, 0.10)';
    }
  };

  // Run once initially to set the correct state on load
  scrollHandler();

  window.addEventListener('scroll', scrollHandler, { passive: true });
}

export function destroyHeader() {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
    scrollHandler = null;
  }
  nav = null;
}
