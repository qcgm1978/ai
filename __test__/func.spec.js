const { Func } = require('../mathematics/function/function')
const nerdamer = require('nerdamer');
const { simplify, parse, derivative } = require('mathjs')
const func = new Func()
it(``, () => {
    expect(func.getRange('(ax+b)/(cx+d)')).toBe('y!=a/c')
    const equation = 'y=(x+1)/(2*x-2)';
    expect(func.getDefineDomain(equation)).toBe('x!=1')
    expect(func.getRange(equation)).toBe('y!=1/2')

    expect(func.getSpecialPoint(equation)).toBe('(0,-0.5)')
});
it(``, () => {
    const str = 'y=2x+1'
    expect(func.translateFunc(str, 1, 2)).toBe('y=2x+5')
    expect(func.translateFunc('x^2+y^2=4', -1, 2)).toBe('(x+1)^2+(y-2)^2=4')
    expect(func.translateFunc('x=1/2', -1, 2)).toBe('(x+1)=1/2')
    expect(func.translateFunc('(3,5)', -1, 2)).toBe('(2,7)')
});
it(``, () => {
    expect(func.convertMathLang({ symmetryAxis: 1 })).toBe('f(1+x)=f(1-x)')
    expect(func.convertMathLang({ symmetryAxis: 1, left: 'x' })).toBe('f(x)=f(2-x)')
    expect(func.convertMathLang({ symmetryAxis: 1, left: '-x' })).toBe('f(-x)=f(2+x)')
    expect(func.convertMathLang({ symmetryAxis: 1, left: '4+x' })).toBe('f(4+x)=f(-2-x)')
});
it(``, () => {
    expect(func.caclCubesSum(1)).toBe(1)
    expect(func.caclCubesSum(1, 2)).toBe(9)
    expect(func.caclCubesSum(1, 3)).toBe(36)
    expect(func.caclCubesSum(1, 4)).toBe(100)
    const bruteForceCalc = Array(30).fill('').reduce((acc, item, index) => acc + (index + 1) ** 3, 0)
    expect(func.caclCubesSum(1, 30)).toBe(bruteForceCalc).toBe(216225)
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