const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modalForm: document.querySelector('[data-modal-form]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  disableScroll();

  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
}

function onCloseModal() {
  enableScroll();

  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

// Data placeholders

refs.modalForm.addEventListener('focusin', e => {
  if (!e.target.classList.contains('js-input')) {
    return;
  }

  e.target.placeholder = e.target.dataset.placeholder;
});

refs.modalForm.addEventListener('focusout', e => {
  if (!e.target.classList.contains('js-input')) {
    return;
  }

  e.target.placeholder = '';
});
