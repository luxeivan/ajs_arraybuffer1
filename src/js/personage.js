export default class Personage {
  constructor() {
    this.attack = 0;
    this.stoned = false;
    this.distance = 2;
  }

  get attack() {
    const attack = this.attack - this.attack / 10 * (this.distance - 1);
    if (this.stoned) {
      attack = Math.round(attack - Math.log2(this.distance) * 5);
    }
    return attack
  }
  set attack(attack) {
    this.attack = attack;
  }

  get stoned() {
    return this.stoned;
  }

  set stoned(stoned) {
    this.stoned = stoned;
  }
}
