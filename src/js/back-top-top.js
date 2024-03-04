// import getRefs from '../refecences/get-refs';
import throttle from 'lodash.throttle';

const refs = {
  backToTopButton: document.querySelector('button[data-action="back-to-top"]'),
};
const breakpoint = 500;

window.addEventListener('scroll', throttle(onWindowScroll, 250));
refs.backToTopButton.addEventListener('click', onBackToTopBtnClick);

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (currentPageYOffset > breakpoint) {
    showBackToTopBtn();
  } else {
    hideBackToTopBtn();
  }
}

function onBackToTopBtnClick(evt) {
  window.scrollTo({
    top: -document.body.offsetHeight,
    behavior: 'smooth',
  });
}

function showBackToTopBtn() {
  refs.backToTopButton.classList.remove('is-hidden');
}

function hideBackToTopBtn() {
  refs.backToTopButton.classList.add('is-hidden');
}
