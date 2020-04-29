const { CalculusFunction } = require('../mathematics/calculus/function')
it(``, () => {
    const cal = new CalculusFunction()
    expect(cal.divide.bind(1, 0)).toThrow()
    expect(cal.squareroot.bind(-1)).toThrow()
    expect(cal.ln.bind(-1)).toThrow()
});