console.log('Hello!!!');

// recolor the first card
const FirstCardRecolorButton = document.getElementById(
  'recolor-first-color-button'
);
const firstCatalogCard = document.querySelector('.product-card');
const redHashColor = '#cf4042';

FirstCardRecolorButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = redHashColor;
});

// recolor backround cards
const recolorBackroundButoon = document.querySelector(
  '.recolor-backround-button'
);
const recolorAllCards = document.querySelector('.product-card-wrapper');
const greenHashColor = '#27d8de';

recolorBackroundButoon.addEventListener('click', () => {
  recolorAllCards.style.backgroundColor = greenHashColor;
});

// recolor all card
const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardsButton = document.querySelector(
  '.recolor-all-card-button'
);
const yellowHashColor = '#d3f31f';

recolorAllCardsButton.addEventListener('click', () => {
  catalogCards.forEach(
    (card) => (card.style.backgroundColor = yellowHashColor)
  );
});

// переход на страницу Google
const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  if (answer) {
    window.open('https://www.google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

// при наведении мышкой на pageTitle в консоль выводится ее текст
const pageTitle = document.querySelector('.page-title');
pageTitle.addEventListener('mouseover', () => {
  console.log(pageTitle.textContent);
});

// 4. Добавить кнопку, при нажатии на которую мы будем менять её цвет с одного на другой. При повторном нажатии цвет меняется с второго на первый.
const recolorButton = document.querySelector('.recolor-button-color');
recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('secondary-color');
});

