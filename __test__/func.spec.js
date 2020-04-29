const { Func } = require('../mathematics/function/function')
it(``, () => {
    const func = new Func()
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