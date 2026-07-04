// Language Switcher Module
(function () {
  window.CRMFactory = window.CRMFactory || {};

  let currentLang = localStorage.getItem('crm_factory_lang') || 'ua';

  window.CRMFactory.getLang = function () {
    return currentLang;
  };

  window.CRMFactory.initLang = function (toggleButtonSelector) {
    const btn = document.querySelector(toggleButtonSelector);
    if (btn) {
      btn.addEventListener('click', () => {
        window.CRMFactory.toggleLang();
      });
    }
    applyLang();
  };

  window.CRMFactory.toggleLang = function () {
    currentLang = currentLang === 'ua' ? 'en' : 'ua';
    localStorage.setItem('crm_factory_lang', currentLang);
    applyLang();
  };

  function applyLang() {
    const isEn = currentLang === 'en';
    document.documentElement.lang = currentLang;

    // Find all translatable elements
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach((el) => {
      // If we haven't stored the Ukrainian text yet, store it
      if (el.dataset.ua === undefined) {
        el.dataset.ua = el.textContent.trim();
      }
      
      const translatedText = isEn ? el.dataset.en : el.dataset.ua;
      
      // Check if it's an input or placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translatedText;
      } else {
        el.textContent = translatedText;
      }
    });
  }
})();
