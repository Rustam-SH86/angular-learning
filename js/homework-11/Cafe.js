export default class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return (this.name, this.location);
  }

  getOrder(drink) {
    console.log(`Welcome to our ${this.name} cafe`);
    console.log(`You ordered ${drink.getDrinkInfo()}`);
    drink.serveDrink();
  }
}
