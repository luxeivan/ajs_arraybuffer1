import Magician from '../magician';

test('Magician getAttack', () => {
  const magician = new Magician();
  const result = magician.getAttack(100, 2);
  expect(result).toBe(90);
});

test('Magician getStoned', () => {
  const magician = new Magician();
  const result = magician.getStoned(100, 2);
  expect(result).toBe(85);
});
