const neuro = require('../neuroscience')
const math = require('../mathematics')
const { Weather } = require('../physics/weather')
// const chaos = require('../physics/chaos')
it(`Chaos: When the present determines the future, but the approximate present does not approximately determine the future.
`, () => {
  const ins = new neuro.Chaos()
  const ins1 = new neuro.Chaos()
  expect(ins.getResult(.00001)).toBeFalsy()
  expect(ins.getResult(.00002)).toBeTruthy()
});
it(`Computes exponential of the input tf.Tensor element-wise. e ^ x`, () => {
  const ins = new math.Exponential([1, 2, -3])
  expect(ins.getResult()).toEqual(new Float32Array([2.7182817459106445, 7.389056205749512, 0.049787066876888275]))
});
it(`0.506127 printed as 0.506`, () => {
  const weather = new Weather(0.506127)
  expect(weather.getNum()).toBe(0.506)
  expect(weather.hasRain).toBeFalsy()
  expect(weather.getLongTermPrediction()).toBeTruthy()
});