const tf = require('@tensorflow/tfjs')
const { CommonSense } = require('../biology/common-sense')
const { Landlords, DoubleEggs } = require('../mathematics/game')
const { getId, getSigma, getCheckCode } = require('../mathematics/other')
const common = new CommonSense()
it(`Looking for a site's URL information`, () => {
    expect(location.pathname).toBe('/')
    expect(common.getUrl(location)).toBe("http://localhost/")
    let m = 'https://developer.mozilla.org/path1/path2?query-str&str2#3';
    let a = new URL(m);
    expect(common.getUrl(a)).toBe(m).toBe(a.href)
});
it(`gravity`, () => {
    const gravity = common.getGravity(1.989 * Math.pow(10, 30), 5.9736 * Math.pow(10, 24), 93.36 * Math.pow(10, 6))
    expect(gravity.value).toBeCloseTo(1.3e40, -1e38)

});
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