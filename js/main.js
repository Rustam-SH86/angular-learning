import './cards-color.js';
import './homework-8.js';
import './Form.js';
import './registration-form.js';
import { Dog } from './homework-10/Dog.js';
import { Cat } from './homework-10/Cat.js';

const dog = new Dog('Barsik', 12, 'short fur');
const cat = new Cat('Murka', 5, 'black');

console.log(dog);
console.log(cat);

dog.saySomething();
cat.saySomething();
