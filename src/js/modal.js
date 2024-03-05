const refs = {
  openModalBtns: document.querySelectorAll('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modalForm: document.querySelector('[data-modal-form]'),
};

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', onOpenModal);
});
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  // document.body.classList.add('modal-is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
  // document.body.classList.remove('modal-is-open');
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
