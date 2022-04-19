export default class Personage {
  getAttack(attack, distance) {
    return attack - attack / 10 * (distance - 1);
  }

  getStoned(attack, distance) {
    return Math.round(this.getAttack(attack, distance) - Math.log2(distance) * 5);
  }
}
