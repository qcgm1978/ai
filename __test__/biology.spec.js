const tf = require('@tensorflow/tfjs')
it(`The first Dense layer has 128 nodes (or neurons). `, () => {
    expect(tf.layers.dense).toBeInstanceOf(Function)
    expect(tf.layers.dense({ name: 'dense', units: 128 }).getConfig().units).toEqual(128)
});