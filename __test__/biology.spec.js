const tf = require('@tensorflow/tfjs')
it(`The first Dense layer has 128 nodes (or neurons). `, () => {
    expect(tf.layers.dense).toBeInstanceOf(Function)
    expect(tf.layers.dense({ name: 'dense', units: 128 }).getConfig().units).toEqual(128)
});
it(`Interneurons connect neurons to other neurons within the same region of the brain or spinal cord`, () => {
    const model = tf.sequential();
    model.add(tf.layers.permute({
        dims: [2, 1, 3],
        inputShape: [10, 64, 4]
    }));
    expect(model.outputShape).toEqual([null, 64, 10, 4]);
    // Now model's output shape is [null, 64, 10], where null is the
    // unpermuted sample (batch) dimension.
});
it(`neuron: Forward propagate + Backward Propagate.
tf: smaller tensors of size batchSize.`, async () => {
    const model = tf.sequential({
        layers: [tf.layers.dense({ units: 1, inputShape: [10] })]
    });
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
    for (let i = 1; i < 5; ++i) {
        const h = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
            batchSize: 4,
            epochs: 3
        });
        expect(h.params.batchSize).toEqual(4)
        console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
    }
});