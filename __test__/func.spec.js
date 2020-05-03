const { Func } = require('../mathematics/function/function')
const func = new Func()
it(``, () => {
    expect(func.calcMin('y=x+16/x', { a: 'x', b: '16/x', isNegative: true })).toBe(-8)
    expect(func.getConjugateRange('y=x+16/x', { a: 'x', b: '16/x', isNegative: true })).toEqual([-Infinity, -8])

});
it(``, () => {
    expect(func.isMeanInequality('y=4x/(x^2+1)', { a: 'x/4', b: '1/(4*x)' })).toBeTruthy()
    expect(func.calcMin('y=4x/(x^2+1)', { a: 'x/4', b: '1/(4*x)' })).toBe(.5)
    expect(func.isMeanInequality('y=abs(tan(x)+cot(x))', { a: 'tan(x)', b: 'cot(x)', val: 'pi/4' })).toBeTruthy()
    expect(func.isMeanInequality('y=x+1/x', { a: 'x' })).toBeFalsy()
    expect(func.isMeanInequality('y=(x^2+3)/sqrt(x^2+2)', { a: 'sqrt(x^2+2)' })).toBeFalsy()
    expect(func.isMeanInequality('y=(sin(x))^2*(cos(x))^2+1/((sin(x))^2*(cos(x))^2)', { a: '(sin(x))^2*(cos(x))^2' })).toBeFalsy()
});
it(``, () => {
    expect(func.solveInverseSymmetryPoint({ x: '-m/2', y: 1 / 2 })).toBe(-1)
    expect(func.getHyperbolaRange('y=(x+c)/(x+1)', ['x!=-1'], 't')).toEqual("determined by c")
    expect(func.getHyperbolaRange('y=t/2+2/t', [-1, 1], 't')).toEqual([[-Infinity, -2.5], [2.5, Infinity]])
});
it(``, () => {
    expect(func.getRange('(ax+b)/(cx+d)')).toBe('y!=a/c')
    const equation = 'y=(x+1)/(2*x-2)';
    expect(func.getDefineDomain(equation)).toBe('x!=1')
    expect(func.getRange(equation)).toBe('y!=1/2')

    expect(func.getSpecialPoint(equation)).toBe('(0,-0.5)')
    const inverse = "(-4+2*y)*(3+y)^(-1)";
    const changeVar = "y=(1+x^2)/(1-x^2)"
    expect(func.inverseSolution('y=(4+3*sin(x))/(2-sin(x))')).toBe(inverse)
    expect(func.getHyperbolaRange(inverse, [-1, 1])).toEqual([0.33, 7])
    const changedVar = "y=(1+t)/(1-t)";

    expect(func.changeVar(changeVar, 'x^2')).toBe(changedVar)
    expect(func.getHyperbolaRange(changedVar, [0, Number.MAX_VALUE], 't')).toEqual([[-Infinity, -1], [1, Infinity]])
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