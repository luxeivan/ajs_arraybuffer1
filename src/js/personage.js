export default class Personage {
  constructor() {
    this.distance = 2;
  }

  get attack() {
    let attack = this.attackProp - (this.attackProp / 10) * (this.distance - 1);
    if (this.stonedProp) {
      attack = Math.round(attack - Math.log2(this.distance) * 5);
    }
    return attack;
  }

  set attack(value) {
    this.attackProp = value;
  }

  get stoned() {
    return this.stonedProp;
  }

  set stoned(value) {
    this.stonedProp = value;
  }
}
