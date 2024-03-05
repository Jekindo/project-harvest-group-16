import throttle from 'lodash.throttle';

const refs = {
  header: document.querySelector('.js-header'),
};
const breakpoint = 500;

window.addEventListener('scroll', throttle(onWindowScroll, 250));

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (currentPageYOffset > breakpoint) {
    showHeader();
  } else {
    hideHeader();
  }
}

function showHeader() {
  refs.header.classList.add('is-fixed');

  refs.header.style.transform = `translateY(-${
    getComputedStyle(refs.header).top
  })`;
}

function hideHeader() {
  refs.header.classList.remove('is-fixed');

  refs.header.style.transform = `translateY(0)`;
}
