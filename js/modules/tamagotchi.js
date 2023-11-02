export default class Tamagotchi {
  constructor() {
    this.health = { value: 5, importance: 1 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.fun = { value: 2, importance: 4 };
    this.counter = 0;
  }

  displayElement(property) {
    property.displayElement.innerText = property.value;
  }

  mountElementProperty(elementSelector, property) {
    property.displayElement = document.querySelector(elementSelector);
    this.displayElement(property);
  }

  mount({ healthElement, hungerElement, energyElement, funElement }) {
    this.mountElementProperty(healthElement, this.health);
    this.mountElementProperty(hungerElement, this.hunger);
    this.mountElementProperty(energyElement, this.energy);
    this.mountElementProperty(funElement, this.fun);
  }

  decrementByOne(property) {
    if (property.value > 0) {
      property.value -= 1;
      this.displayElement(property);
    }
  }

  update() {
    this.counter++;

    if (this.counter % 2 === 0) {
      this.decrementByOne(this.energy);
      if (this.fun.value <= 0) {
        this.decrementByOne(this.energy);
      }
    }

    if (this.hunger.value <= 0 || this.energy.value <= 0) {
      this.decrementByOne(this.health);
    }

    this.decrementByOne(this.hunger);
    this.decrementByOne(this.fun);
  }
}
