// Header Sticky/Scroll Animation Module
let nav = null;
let scrollHandler = null;

export function initHeader(navSelector) {
  nav = document.querySelector(navSelector);
  if (!nav) return;

  scrollHandler = () => {
    const isScrolled = window.scrollY > 24;
    
    // Smooth transitions using classes or inline styles
    if (isScrolled) {
      nav.style.background = 'rgba(18, 18, 18, 0.94)';
      nav.style.borderBottomColor = 'rgba(240, 236, 225, 0.14)';
    } else {
      nav.style.background = 'rgba(18, 18, 18, 0.72)';
      nav.style.borderBottomColor = 'rgba(240, 236, 225, 0.07)';
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
