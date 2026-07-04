import { initLang } from './modules/lang.js';
import { initParallax } from './modules/parallax.js';
import { initHeader } from './modules/header.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Header transitions on scroll
  initHeader('[data-crm-factory-nav]');

  // Initialize mouse parallax for geometric background shapes
  initParallax('[data-depth]');

  // Initialize Language Switcher (UA / EN)
  initLang('.btn-lang');
});
