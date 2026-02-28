//3. Создайте объект на основе ваших данных.

const person = {
  name: 'Rustam',
  lastName: 'Shafik',
  email: 'rustam@gmail.com',
  job: 'engineer',
  jobPosition: 'main specialist',
  age: 30,
  country: 'Russia',
  city: 'Moscow',
  hasCar: true,
  numberOfChildren: 1,
  favoriteColor: 'green',
  education: 'bachelor degree',
};

// 4. Создайте объект, который будет хранить данные об автомобиле.Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3.

const car = {
  brand: 'BMW',
  model: 'X5',
  yearOfManufacture: 2024,
  color: 'red',
  transmission: 'automatic',
};
car.owner = { ...person };

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4 и проверять, есть ли в объекте свойство "максимальная скорость".

function addMaxSpeed(car) {
  if ('maxSpeed' in car) {
    return;
  } else {
    car.maxSpeed = 250;
  }
}
addMaxSpeed(car);

// 6. Написать функцию, которая получает первым аргументом  — объект и свойство объекта

function printPropertyOfObject(car, color) {
  console.log(car[color]);
}
printPropertyOfObject(car, 'color');

// 7. Создать массив, который содержит названия продуктов (просто строки)

const fruits = ['apple', 'pomegranate', 'grape', 'orange', 'watermelon'];

// 8. Создать массив, состоящий из объектов, добавить еще одну книгу в конец списка.

const bookStore = [
  {
    name: 'Harry Potter',
    author: 'J.K. Rowling',
    yearOfPublication: 1997,
    colorOfCover: 'red',
    genre: 'Fantasy',
  },
  {
    name: 'War and Peace',
    author: 'L.N. Tolstoy',
    yearOfPublication: 1869,
    colorOfCover: 'grey',
    genre: 'Historical novel',
  },
  {
    name: 'The Captain’s Daughter',
    author: 'A.S. Pushkin',
    yearOfPublication: 1836,
    colorOfCover: 'black',
    genre: 'Romance',
  },
];
bookStore.push({
  name: '1984',
  author: 'George Orwell',
  yearOfPublication: 1949,
  colorOfCover: 'green',
  genre: 'anti-utopian novel',
});

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной. С помощью метода массива или оператора объединить эти два массива в один

const bestSellers = structuredClone(bookStore);
const allBooks = [...bookStore, ...bestSellers];

// Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)".

function getIsRare(books) {
  return books.map(book => ({
    ...book,
    isRare: book.yearOfPublication < 1900
  }));
}
const updatedBooks = addIsRare(allBooks);
console.log(updatedBooks);
