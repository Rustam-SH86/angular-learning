import { comments } from './comments.js';

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredListOfNumbers = listOfNumbers.filter((num) => num > 4);
console.log(filteredListOfNumbers);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const cars = ['Opel', 'BMW', 'Bentley', 'Lada', 'Jeep'];
const hasCar = cars.includes('BMW');
console.log(hasCar);

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

function reverseArray(array) {
  array.reverse();
}
reverseArray(arr);
reverseArray(cars);

// Уровень 2:
// 5. Добавить файл comments.js, в нём создать константу и в него поместить  10 объектов +
// 6. Сделать константу экспортируемой +
// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const sortedByEmailArray = comments.filter((comment) =>
  comment.email.includes('.com')
); 
console.log(sortedByEmailArray);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const sortedIdlArray = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));
console.log(sortedIdlArray);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const commentsIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(commentsIdAndName);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180 ? true : false,
}));
console.log(validatedComments);

//Уровень 3:

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const listOfEmailsByReduce = comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);
console.log(listOfEmailsByReduce);

const listOfEmail = comments.map((comment) => comment.email);
console.log(listOfEmail);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

console.log(listOfEmail.join(';'));
console.log(listOfEmail.toString());
