import './cards-color.js';
import Cafe from './homework-11/Cafe.js';
import Coffee from './homework-11/Coffee.js';
import Tea from './homework-11/Tea.js';
import Lemonade from './homework-11/Lemonade.js';

const cafe = new Cafe('Coffee Hous', 'Baku');

const coffee = new Coffee(
  'Restretto',
  'medium',
  12,
  90,
  70,
  'Brazil',
  'Almond',
  'Dark'
);

const tea = new Tea('Green Tea', 'large', 8, 85, 75, 'Green', 'China');

const lemonade = new Lemonade(
  'Orange Lemonade',
  'medium',
  7,
  5,
  8,
  'caramel syrup',
  'sparkling',
  true
);

cafe.getOrder(tea);
console.log(tea.getTeaInfo());
tea.addLemon();
