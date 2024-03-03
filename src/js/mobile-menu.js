const refs = {
  openMenuBtn: document.querySelector('[data-action="open-menu"]'),
  closeMenuBtn: document.querySelector('[data-action="close-menu"]'),
  menu: document.querySelector('[data-menu]'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.menu.classList.toggle('is-open');
}
