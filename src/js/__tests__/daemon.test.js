import Daemon from '../daemon';

test('daemon getAttack', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  daemon.attack = 100;
  const result = daemon.attack;
  expect(result).toBe(85);
});

test('daemon getAttack', () => {
  const daemon = new Daemon();
  daemon.stoned = true;
  const result = daemon.stoned;
  expect(result).toBe(true);
});
