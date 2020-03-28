const neuro = require('../neuron/neuroscience')
const math = require('../mathematics')
let { Parent, Child, Another, NanoStructure } = require('../physics/structure')
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
  expect(weather.getRoundErr(0.175)).toBe(.17)
});
it(`Mathematical objects are exhaustively defined by their place in such structures`, () => {
  const parent = new Parent()
  expect(parent.isChild).toBeFalsy()
  const child = new Child(1)
  expect(child.isChild).toBeTruthy()
  expect(child.hasOrder).toBeTruthy()
  expect(new Child(0).hasOrder).toBeFalsy()
});
it(`Self-assembly is a process in which a disordered system of pre-existing components forms an organized structure or pattern without external direction`, () => {
  const another = new Another(Parent)
  const another1 = new Another(Parent)
  const another2 = new Another(Parent)
  expect(another.interactCount).toBe(5)
  expect(another1.interactCount).toBe(5)
  expect(another2.interactCount).toBe(0)
  expect(Another.freeEnergy).toBe(0)
  // Parent.interact = 5
  Another.freeEnergy = 10
  const another3 = new Another(Parent)
  expect(another3.interactCount).toBe(5)
  expect(another3.isStrongState).toBeTruthy()
  expect(NanoStructure.isExist).toBeTruthy()
});