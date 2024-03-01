const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modal: document.querySelector('[data-modal]'),
  modalForm: document.querySelector('[data-modal-form]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('is-modal-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('is-modal-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

/*
 * Нужно сделать отслеживание курсора только, когда он поверх модалки.
 * Анимировать градиент за курсором + усиливать эффект анимации, при фокусе на элементах формы.
 */

// refs.modal.addEventListener('mousemove', evt => {
//   let x = evt.clientX;
//   let y = evt.clientY;

//   refs.backdrop.style.backgroundSize = `${evt.clientX / 2}%`;

//   if (x - evt.clientX >= 50) {
//     refs.backdrop.style.backgroundSize = `${evt.clientX / 2}%`;
//   }
// });

// refs.modalForm.children.forEach(element => {
//   element.addEventListener('focus', evt => {
//     console.log(evt);
//   });
// });

// const inputs = refs.modalForm.querySelectorAll('input');

// inputs.forEach(input => {
//   input.addEventListener('focus', evt => {
//     refs.backdrop.style.backgroundSize = '120%';
//   });

//   input.addEventListener('blur', evt => {
//     refs.backdrop.style.backgroundSize = '100%';
//   });
// });
