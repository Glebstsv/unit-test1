const getHealthStatus = require('../src/getHealthStatus');

test('getHealthStatus returns correct status for name with different health', () => {
  const cases = [
    [{name: 'Маг', health: 80}, 'healthy'],
    [{name: 'Маг', health: 45}, 'wounded'],
    [{name: 'Маг', health: 15}, 'wounded'],
    [{name: 'Маг', health: 14}, 'critical'],
    [{name: 'Маг', health: 0}, 'critical'],
    [{name: 'Маг', health: -1}, 'critical'],
  ];
  expect(
    cases.every(([input, expected]) => getHealthStatus(input) === expected)
  ).toBe(true);
});