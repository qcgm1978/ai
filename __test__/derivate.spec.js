const { Func } = require('../mathematics/function/function')
const func = new Func()
it(``, () => {
    const str = 'f(x)=-2x^3+(b-3)x^2+cx'
    expect(func.getOddFuncCoef(str)).toEqual({ b: 3 })
});