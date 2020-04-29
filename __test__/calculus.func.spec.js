const { CalculusFunction } = require('../mathematics/calculus/function')
it(``, () => {
    const cal = new CalculusFunction()
    expect(cal.divide.bind(1, 0)).toThrow()
    expect(cal.squareroot.bind(-1)).toThrow()
    expect(cal.ln.bind(-1)).toThrow()
    expect(cal.buildFunc({ expression: 'log(x^2)', param: 1 })).toBeCloseTo(0)
    // expect(cal.buildFunc({ expression: 'log((x)^2)', param: -1 })).toBeCloseTo(0)
    expect(cal.floor(1.1)).toBe(1)
    expect(cal.floor(-1.1)).toBe(-2)
});
it(``, () => {

})