'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#menu-principal');
const mobile = window.matchMedia('(max-width: 850px)');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobile.matches) return;
  closeMenu();
  const section = document.querySelector(link.hash);
  if (section) {
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
mobile.addEventListener('change', () => {
  const focusWasInNav = navigation.contains(document.activeElement);
  closeMenu(mobile.matches && focusWasInNav);
  if (!mobile.matches && document.activeElement === menuButton) navigation.querySelector('a').focus();
});
menuButton.hidden = false;
document.documentElement.classList.add('js');

const chips = [...document.querySelectorAll('[data-filter]')];
const products = [...document.querySelectorAll('[data-category]')];
const results = document.querySelector('#resultados');
chips.forEach(chip => chip.addEventListener('click', () => {
  const filter = chip.dataset.filter;
  chips.forEach(button => button.setAttribute('aria-pressed', String(button === chip)));
  let count = 0;
  products.forEach(card => {
    card.hidden = filter !== 'todos' && card.dataset.category !== filter;
    if (!card.hidden) count += 1;
  });
  results.textContent = `${count} ${count === 1 ? 'peça ilustrativa' : 'peças ilustrativas'} · ${chip.textContent}`;
}));
document.querySelector('.filter').hidden = false;
