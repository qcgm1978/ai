const tf = require('@tensorflow/tfjs')
const { r, Chaos } = require('../neuron/neuroscience')
const { Connectionism } = require('../neuron/connectionism')
it(`added a Dense layer(Fully connected) with only single neuron. `, () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd',
        metrics: ['mse']
    });
    let xs = tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'int32');
    //y=3*x-1
    xs = tf.tensor1d([2, 5, 8, 11, 14, 17, 20, 23, 26, 27], 'int32');
    expect(xs.rankType).toEqual('1')
    expect(tf.tensor2d([[1, 2], [3, 4]]).rankType).toBe('2')
});
it(`Most neurons receive signals via the dendrites and soma and send out signals down the axon.`, () => {
    const chaos = new Chaos()
    expect(chaos.axon()).toBe('axon')
    expect(chaos.signal).toBe('')
    chaos.dendrite('new signal')
    expect(chaos.signal).toBe('new signal')
});
it(` If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.`, () => {
    const chaos = new Chaos()
    expect(chaos.ini.netVoltage).toBe(3.5)
    expect(chaos.excitatory()).toBe(4.5)
    expect(chaos.inhibitory()).toBe(3.5)
});
it(`Connectionism presents a cognitive theory based on simultaneously occurring, distributed signal activity via connections that can be represented numerically`, () => {
    const connect = new Connectionism()
    connect.learn(1)
    expect(connect['weight_1']).toBe(0)
    connect.learn(1)

    expect(connect['weight_1']).toBe(.1);
    connect.learn(2)
    expect(connect['weight_2']).toBe(0)
    expect(connect['weight_1']).toBeGreaterThan(connect['weight_2'])
    expect(connect.activation).toBe(.1)
});