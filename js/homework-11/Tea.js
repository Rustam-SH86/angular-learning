import Drink from './Drink.js';

export default class Tea extends Drink {
  constructor(
    name,
    size,
    price,
    drinkTemperature,
    desiredTemperature,
    typeOfTea,
    producingCountry
  ) {
    super(name, size, price, drinkTemperature, desiredTemperature);
    this.typeOfTea = typeOfTea;
    this.producingCountry = producingCountry;
    this.hasLemon = false;
  }

  addLemon() {
    this.hasLemon = true;
    console.log(`Lemon has added to ${this.name}`);
  }

  getTeaInfo() {
    return `${this.getDrinkInfo()}, tea type: ${this.typeOfTea}, country: ${this.producingCountry}, lemon: ${this.hasLemon}`;
  }
}
