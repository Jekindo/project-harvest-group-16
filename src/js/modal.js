const refs = {
  openModalBtns: document.querySelectorAll('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modalForm: document.querySelector('[data-modal-form]'),
};

console.log(refs.openModalBtns);

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', onOpenModal);
});
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  disableScroll();

  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  // document.body.classList.add('modal-is-open');
}

function onCloseModal() {
  enableScroll();

  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
  // document.body.classList.remove('modal-is-open');

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});

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
