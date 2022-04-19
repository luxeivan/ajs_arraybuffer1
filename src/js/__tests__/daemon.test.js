import Daemon from '../daemon';

test('Magician getAttack', () => {
  const daemon = new Daemon();
  const result = daemon.getAttack(100, 2);
  expect(result).toBe(90);
});

test('Magician getStoned', () => {
  const daemon = new Daemon();
  const result = daemon.getStoned(100, 2);
  expect(result).toBe(85);
});
