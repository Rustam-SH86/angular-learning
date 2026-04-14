// 3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов

export class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  saySomething() {
    console.log(`${this.name} says ${this.getVoice()}`);
  }
};
