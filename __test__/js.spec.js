const neuro = require('../neuroscience')
it(`Chaos: When the present determines the future, but the approximate present does not approximately determine the future.
`, () => {
  const ins = new neuro.Chaos()
  const ins1 = new neuro.Chaos()
  expect(ins.getResult(.00001)).toBeFalsy()
  expect(ins.getResult(.00002)).toBeTruthy()
});
