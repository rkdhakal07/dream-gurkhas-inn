/* Functional shared mobile navigation for Dream Gurkhas Inn. */
(() => {
  'use strict';

  const toggle = document.querySelector('.dgi-menu-toggle');
  const nav = document.getElementById('dgi-primary-nav');
  if (!toggle || !nav) return;

  const icon = toggle.querySelector('.material-symbols-outlined');

  const setMenuOpen = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    if (icon) icon.textContent = isOpen ? 'close' : 'menu';
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  const desktopQuery = window.matchMedia('(min-width: 768px)');
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', () => setMenuOpen(false));
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(() => setMenuOpen(false));
  }
})();
