const refs = {
  openMenuBtn: document.querySelector('[data-action="open-menu"]'),
  closeMenuBtn: document.querySelector('[data-action="close-menu"]'),
  menu: document.querySelector('[data-menu]'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.menu.addEventListener('click', onLinkClick);

function toggleMenu(evt) {
  refs.menu.classList.toggle('is-open');
}

function onLinkClick(evt) {
  getCurrentSection();

  if (evt.target.classList.contains('js-mobile-menu-link')) {
    toggleMenu();

    return;
  }
}

function getCurrentSection() {
  const currentUrl = window.location.href;
  const currentSectionId = currentUrl.split('#')[1];

  // const currentActiveSection = refs.menu.querySelector('.button.is-active');

  // const nextActiveSection = refs.menu.querySelector(`#${currentSectionId}`);
  // console.log('🚀 ~ getCurrentSection ~ nextActiveSection:', nextActiveSection);
}
