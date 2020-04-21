const mathExp = require('../mathematics/metric-exponential')
const { r, Probability, Stock } = require('../mathematics/probability')
const math = require('../mathematics/simplify')
const prob = new Probability()
it(``, () => {
    const stock = new Stock()
    const simplify = stock.getSimplifyFormula()
    expect(simplify).toBe("6 * x * y - 3 * (x + y) + 2 * y * x + 1")
});

it(` Probability is a number between 0 and 1`, () => {
    const num = prob.getAProb()
    expect(num).toBeGreaterThan(0).toBeLessThan(1)
});
it(`probabilities can be numerically described by the number of desired outcomes divided by the total number of all outcomes`, () => {
    const result = prob.calcProb(1, 4)
    expect(result).toBe(.25)
});
it(``, () => {
    // expect(r()).toBeLessThan(2).toBeGreaterThan(-2)
});
it(`Computes exponential of the input tf.Tensor element-wise. e ^ x`, () => {
    const ins = new mathExp.Exponential([1, 2, -3]);
    expect(ins.getResult()).toEqual(new Float32Array([2.7182817459106445, 7.389056205749512, 0.049787066876888275]))
});
