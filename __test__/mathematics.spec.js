const mathExp = require('../mathematics/metric-exponential')
const { Algorithm } = require('../mathematics/algorithm')
const { OddFunction } = require('../mathematics/function')
const { r, Probability, Stock, Gamble } = require('../mathematics/probability')
const { Logrithm } = require('../mathematics/logrithm')
const prob = new Probability()
it(``, () => {
    const goCount = Math.pow(3, 361)
    const atomCount = Math.pow(10, 80)
    const log = new Logrithm(goCount, atomCount)
    expect(log.getLog(3, 9)).toBeCloseTo(2)
    expect(log.getLog(10, 1000)).toBeCloseTo(3)
    expect(log.getLog(10, 10 ** 3)).toBeCloseTo(3 * log.getLog(10, 10)).toBeCloseTo(3)
    expect(log.getLog(10, 1e5 / 1e2)).toBeCloseTo(log.getLog(10, 1e5) - log.getLog(10, 1e2)).toBeCloseTo(3)
    expect(log.getLog(10, 1e2 * 1e1)).toBeCloseTo(log.getLog(10, 1e2) + log.getLog(10, 1e1)).toBeCloseTo(3)
    expect(log.getRatio())
        .toBeCloseTo(Math.pow(10, log.getLog(10, goCount / atomCount)), -80)
        .toBeCloseTo(Math.pow(10, log.getLog(10, goCount) - log.getLog(10, atomCount)), -80)
        .toBeCloseTo(Math.pow(10, 361 * log.getLog(10, 3) - 80 * log.getLog(10, 10)), -80)
        .toBeCloseTo(Math.pow(10, 361 * .48 - 80 * 1), -94)
        .toBeCloseTo(Math.pow(10, 93.28), -94);
});
it(``, () => {
    const oddFunction = new OddFunction({ relation: 2, arithmetic: 'divide' })
    expect(-oddFunction.getFunctionVal(1)).toBe(oddFunction.getFunctionVal(-1)).toBe(.5)
});
it(``, () => {
    const algorithm = new Algorithm()
    expect(algorithm.sucessiveDivision(104, 40)).toBe(8)
    expect(algorithm.sucessiveDivision(40, 104)).toBe(8)
});
it(``, () => {
    const gamble = new Gamble({ principal: 100 })
    expect(gamble.getGambleAwayProb(120)).toBe('16.7%')
    expect(gamble.getGambleAwayProb(200)).toBe('50.0%')
    expect(gamble.getGambleAwayProb(1000)).toBe('90.0%')
    expect(gamble.getGambleAwayProb(Infinity)).toBe('100.0%')
});
it(``, () => {
    const stock = new Stock()
    const simplify = stock.getSimplifyFormula()
    expect(simplify).toBe("6 * x * y - 3 * (x + y) + 2 * y * x + 1")
    expect(stock.getWinCard() + '').toMatch(/0|1/)
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
