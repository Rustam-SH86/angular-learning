

export default class Drink {
  #drinkTemperature;

  constructor(name, size, price, drinkTemperature, desiredTemperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#drinkTemperature = drinkTemperature;
    this.desiredTemperature = desiredTemperature;
  }

  getDrinkInfo() {
    return `${this.name}, size: ${this.size}, price: ${this.price}`;
  }

  getDrinkTemperature() {
    return this.#drinkTemperature;
  }

  setDrinkTemperature(desiredTemperature) {
    this.#drinkTemperature = desiredTemperature;
    console.log(
      `Temperature of ${this.name} is now ${this.#drinkTemperature}°`
    );
  }

  #makeDrink() {
    console.log(`Your ${this.name} is ready`);
  }

  serveDrink() {
    this.#makeDrink();
    if (this.getDrinkTemperature() !== this.setDrinkTemperature) {
      this.setDrinkTemperature(this.desiredTemperature);
    }
    console.log(`Your ${this.name} is served`);
  }
}
