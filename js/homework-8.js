

//2. Создаем файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из вёрстки 
import { products } from './products.js';

//3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)
const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

//5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить?

function getNumberOfCards() {
  const input = prompt('How many cards do you want to display? From 1 to 5:');
  const numberOfCardsToDisplay = Number(input);
  if (numberOfCardsToDisplay >= 1 && numberOfCardsToDisplay <= 5) {
    return numberOfCardsToDisplay;
  } else {
    alert('You entered invalid number! Please enter a number from 1 to 5');
    return getNumberOfCards();
  }
}

//5*. рендерит карточки (принимая массив аргументом)

function renderCards(arrayOfProducts) {
  arrayOfProducts.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector('.product-title').textContent = product.title;
    productClone.querySelector('.product-description').textContent =
      product.description;
    productClone.querySelector('.product-type').textContent = product.skinType;
    productClone.querySelector('.product-price').textContent =
      `${product.price} ${product.currency}`;

    const compositionList = productClone.querySelector('.product-composition');

    product.composition.forEach((item) => {
      const compositionItem = document.createElement('li');
      compositionItem.classList.add('product-card__cream-ingredients');
      compositionItem.textContent = item;
      compositionList.appendChild(compositionItem);
    });

    const img = productClone.querySelector('.product-image');
    img.src = `images/${product.image}.png`;
    img.alt = product.image;

    productList.appendChild(productClone);
  });
}

function displayProductCards() {
  const numberOfCard = getNumberOfCards();

  if (numberOfCard > 0) {
    const limitedProducts = products.slice(0, numberOfCard);
    renderCards(limitedProducts);
  }
}
displayProductCards();

//4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getArrayByReduce = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);
console.log(getArrayByReduce)