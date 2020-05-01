const { Exponent, Logarithm } = require('../mathematics/calculus/exponent')
const exponent = new Exponent()
const log = new Logarithm()
it(``, () => {
    expect(log.inequation('log3(x)>-1')).toBe("x > 0.33")
    expect(log.solveInEquations({ equations: ['log(3)/log(x)=0.5'], variable: 'x' })).toBe(9)
});
it(``, () => {
    expect(exponent.isInDomain(5)).toBeTruthy()
    expect(exponent.isInDomain('5+2i')).toBeFalsy()
    expect(exponent.isInCodomain('5+2i')).toBeFalsy()
    expect(exponent.isInCodomain(-5)).toBeFalsy()
    expect(exponent.isInCodomain(5)).toBeTruthy()
    expect(log.getLog(10, 10)).toBe(1)
    expect(log.solveEquations({ equations: ['log(m)=0', 'x=1', 'm*n=1'], variable: 'n' })).toBe(1)
    expect(log.solveEquations({ equations: ['log(m/n)=0', 'm=1'], variable: 'n' })).toBe(1)
    expect(log.solveEquations({ equations: ['log(m^n)=0', 'm=2'], variable: 'n' })).toBeCloseTo(0)
    expect(log.solveEquations({ equations: ['log(m)/log(n)=1', 'n=2^l', 'l=0'], variable: 'm' })).toBeCloseTo(1)
    expect(log.solveEquations({ equations: ['log(N)/log(a^k)=1', 'k=0', 'a=5'], variable: 'N' }))
        .toBe(log.solveEquations({ equations: ['1/k*log(N)/log(a)=1', 'k=0', 'a=5'], variable: 'N' }))
        .toBe(1)
});