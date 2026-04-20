import Drink from './Drink.js';

export default class Lemonade extends Drink {
  constructor(
    name,
    size,
    price,
    drinkTemperature,
    desiredTemperature,
    typeOfSyrup,
    sparkling
  ) {
    super(name, size, price, drinkTemperature, desiredTemperature, typeOfSyrup);
    this.typeOfSyrup = typeOfSyrup;
    this.sparkling = sparkling;
    this.hasIce = false;
  }

  addIce() {
    this.addIce = true;
    console.log(`Ice was added to ${this.name}`);
  }

  getLemonadeInfo() {
    return `${this.getDrinkInfo()}, syrup: ${this.typeOfSyrup}, sparkling: ${this.sparkling}`;
  }
}
