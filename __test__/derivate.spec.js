const { Func } = require('../mathematics/function/function')
const func = new Func()
it(``, () => {
    const str = 'f(x)=-2*x^3+(b-3)*x^2+c*x'
    expect(func.getOddFuncCoef(str)).toEqual({ b: 3 })
    const derivate = "-6*x^2+6*x+c";

    expect(func.getDifferentiate(str)).toEqual("-6*x^2+2*(-3+b)*x+c")
    const c = func.getNumberLine(derivate, -1);

    expect(c).toEqual(12)
    expect(func.evaluate(derivate, { c: 12 })).toBe("-6*x^2+6*x+12")
});