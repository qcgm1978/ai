const math = require('../mathematics/metric-exponential')
const { r } = require('../mathematics/probability')
it(``, () => {
    expect(r()).toBeLessThan(2).toBeGreaterThan(-2)
});
it(`Computes exponential of the input tf.Tensor element-wise. e ^ x`, () => {
    const ins = new math.Exponential([1, 2, -3]);
    expect(ins.getResult()).toEqual(new Float32Array([2.7182817459106445, 7.389056205749512, 0.049787066876888275]))
});
