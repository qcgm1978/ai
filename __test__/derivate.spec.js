const { Func } = require('../mathematics/function/function')
const func = new Func()
it(``, () => {
    str = 'mx^2-4mx+4=0'
    const simplify = 'x^2-4x+4*m^(-1)=0';

    expect(func.getEquivalentEquation(str)).toBe(simplify)
    expect(func.getRootsPbs(str, 2)).toBe(simplify)
    expect(func.substituteEquation({ equation: simplify, val: 1, funcVal: 0, Comparison: '>' })).toBe("x>1.33")
});
it(``, () => {
    const str = 'f(x)=-2*x^3+(b-3)*x^2+c*x'
    expect(func.getOddFuncCoef(str)).toEqual({ b: 3 })
    const derivate = "-6*x^2+6*x+c";

    expect(func.getDifferentiate(str)).toEqual("-6*x^2+2*(-3+b)*x+c")
    const c = func.getNumberLine(derivate, -1);

    expect(c).toEqual(12)
    const roots = func.getRoots(derivate, { c: 12 });

    expect(roots).toEqual([-1, 2])
    expect(func.getDerivateMax(derivate, [-3, 3], -1)).toEqual(-24)
});