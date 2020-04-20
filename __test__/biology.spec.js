const tf = require('@tensorflow/tfjs')
const { CommonSense, Drawback } = require('../biology/common-sense')
const { Landlords, DoubleEggs } = require('../mathematics/game')
const { getId, getSigma, getCheckCode } = require('../mathematics/other')
const common = new CommonSense()
it(``, () => {
    const drawBack = new Drawback({ salary: [[1.5, 6], [1.5, 6]], laborIncome: .07 })
    const withhold = drawBack.getActualWithhold()
    expect(withhold).toBe(.696)
    expect(drawBack.getActualWithhold([[1.5, 12]])).toBe(.948)
    expect(drawBack.getPayableWithhold()).toBe(.948)
    expect(drawBack.getDrawback()).toBe(.252)
    expect(drawBack.getLaborTaxableIncome()).toBe(0)
    expect(drawBack.getLaborTaxableIncome(.3)).toBe(.22)
    expect(drawBack.getLaborTaxableIncome(.5)).toBe(.4)
    expect(drawBack.getLaborServiceTax()).toBe(0)
    expect(drawBack.getLaborServiceTax(2.5)).toBe(.4)
    expect(drawBack.getLaborServiceTax(18)).toBe(5.06)
    expect(drawBack.getTotalSalary(18)).toBe(12.94)
});
it(`Looking for a site's URL information`, () => {
    expect(location.pathname).toBe('/')
    expect(common.getUrl(location)).toBe("http://localhost/")
    const link = 'https://developer.mozilla.org/path1/path2?query-str=a&str2=b#3';
    const url = new URL(link);
    expect(common.getUrl(url)).toBe(link).toBe(url.href)
    expect(['protocol', 'hostname', 'pathname', 'search', 'hash'].reduce((acc, item, index) => acc + url[item] + (index ? '' : '//'), '')).toBe(link).toBe(url.href)
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