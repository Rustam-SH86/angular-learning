import { Animal } from './Animal.js';

export class Dog extends Animal {
  constructor(name, age, fur) {
    super(name, age);
    this.fur = fur;
  }

  getVoice() {
    return 'gav-gav-gav...';
  }
};
