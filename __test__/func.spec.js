const { Func } = require('../mathematics/function/function')
const nerdamer = require('nerdamer');
const { simplify, parse, derivative } = require('mathjs')
const func = new Func()
it(``, () => {
    expect(func.caclCubesSum(1)).toBe(1)
    expect(func.caclCubesSum(1, 2)).toBe(9)
    expect(func.caclCubesSum(1, 3)).toBe(36)
    expect(func.caclCubesSum(1, 4)).toBe(100)
    const bruteForceCalc = Array(30).fill('').reduce((acc, item, index) => acc + (index + 1) ** 3, 0)
    expect(func.caclCubesSum(1, 30)).toBe(bruteForceCalc).toBe(216225)
});
it(``, () => {
    var x = nerdamer('simplify((a^2+b^2)/(a*b))');
    expect(x.toString()).toEqual("(a*b)^(-1)*(a^2+b^2)*simplify")
    const str = '(a^2+b^2)/(a*b)';

    expect((simplify(str).toString())).toBe("(a ^ 2 + b ^ 2) / (a * b)")
    expect((func.simplify(str))).toBe("a^2/a*b + b^2/a*b")
});
it(``, () => {
    const arith = func.getArithMean(5, 6);

    expect(arith).toBe(5.5)
    const geo = func.getGeoMean(5, 6);

    expect(geo).toBeCloseTo(5.477)
    const weight = func.getWeightedMean(5, 6);
    expect(weight).toBeCloseTo(5.522)
    const harm = func.getHarmMean(5, 6);

    expect(weight).toBeGreaterThan(arith).toBeGreaterThan(func.getGeoMean(5, 6)).toBeGreaterThan(harm)
    expect(func.getWeightedMaxMin(5, 6).min).toBe(arith)
    expect(func.getArithMaxMin(5, 6).min).toBeCloseTo(geo)
    expect(func.getArithMaxMin(5, 6).max).toBeCloseTo(weight)
    expect(func.getHarmMaxMin(5, 6).max).toBeCloseTo(geo)
});