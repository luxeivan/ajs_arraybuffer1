import Magician from '../magician';

test('Magician getAttack', () => {
  const magician = new Magician();
  magician.stoned = true;
  magician.attack = 100;
  const result = magician.attack;
  expect(result).toBe(85);
});

test('Magician getAttack', () => {
  const magician = new Magician();
  magician.stoned = true;
  const result = magician.stoned;
  expect(result).toBe(true);
});
