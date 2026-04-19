import Drink from './Drink.js';

export default class Coffee extends Drink {
  constructor(
    name,
    size,
    price,
    drinkTemperature,
    desiredTemperature,
    typeOfGrain,
    typeOfMilk,
    typeOfRoasting
  ) {
    super(name, size, price, drinkTemperature, desiredTemperature);
    this.typeOfGrain = typeOfGrain;
    this.typeOfMilk = typeOfMilk;
    this.typeOfRoasting = typeOfRoasting;
  }

  getCoffeeInfo() {
    return `${this.getDrinkInfo()}, grain: ${this.typeOfGrain}, milk: ${this.typeOfMilk}, roasting: ${this.typeOfRoasting}`;
  }
}
