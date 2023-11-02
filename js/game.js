import Tamagotchi from "./modules/tamagotchi.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
  }

  start = (domElements) => {
    this.tamagotchi.mount(domElements);

    setInterval(() => {
      this.tamagotchi.update();
    }, 1000);
  };
}
