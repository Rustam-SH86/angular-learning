//3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов

class Animal {
  constructor(name,age) {
    this.name = name
    this.age = age
  }

  saySomething() {
    console.log(`${this.name} says ${this.getVoice()}`)
    }
};

class Dog extends Animal {
  constructor(name,age,fur) {
    super(name,age)
    this.fur = fur
  }

    getVoice() {
      return 'gav-gav-gav...'
  }
};

class Cat extends Animal {
  constructor(name,age,color) {
    super(name,age)
    this.color = color
  }

  getVoice() {
    return 'miau-miau-miau...'
  }
};

const dog = new Dog('Barsik',12,'short fur');
const cat = new Cat('Murka',5,'black');
console.log(dog)
console.log(cat)
dog.saySomething()
cat.saySomething()