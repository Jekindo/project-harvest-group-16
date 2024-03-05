const vegetablesCards = document.querySelectorAll('.vegetables-list .card');

vegetablesCards.forEach(item => {
  item.addEventListener('click', onCardClick);
});

function onCardClick(evt) {
  const currentFlippedCard = document.querySelector(
    '.vegetables-list .card.is-flipped'
  );

  if (currentFlippedCard) {
    currentFlippedCard.classList.remove('is-flipped');
  } else {
    evt.currentTarget.classList.add('is-flipped');
  }

  const nextActiveCard = evt.currentTarget;
  nextActiveCard.classList.add('is-flipped');

  if (currentFlippedCard === nextActiveCard) {
    nextActiveCard.classList.remove('is-flipped');
  }
}
