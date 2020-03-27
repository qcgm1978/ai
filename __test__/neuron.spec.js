const tf = require('@tensorflow/tfjs')
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