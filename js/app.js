// Main Application Bootstrapper
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const api = window.CRMFactory;
    if (!api) {
      console.error('CRM Factory namespace not found!');
      return;
    }

    // Initialize Header transitions on scroll
    if (typeof api.initHeader === 'function') {
      api.initHeader('[data-crm-factory-nav]');
    }

    // Initialize mouse parallax for geometric background shapes
    if (typeof api.initParallax === 'function') {
      api.initParallax('[data-depth]');
    }

    // Initialize Language Switcher (UA / EN)
    if (typeof api.initLang === 'function') {
      api.initLang('.btn-lang');
    }
  });
})();
