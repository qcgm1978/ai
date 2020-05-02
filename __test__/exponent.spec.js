const { Exponent, Logarithm } = require('../mathematics/calculus/exponent')
const exponent = new Exponent()
const log = new Logarithm()
it(``, () => {
    expect(log.inRange({ expression: 'lga(3)', isMoreThanOne: false })).toEqual([-Infinity, 0]);
    expect(log.inRange({ expression: 'lga(.33)', isMoreThanOne: false })).toEqual([0, Infinity]);
    expect(log.inRange({ expression: 'a^3', isMoreThanOne: false })).toEqual([0, 1]);
    expect(log.inRange({ expression: 'a^-3', isMoreThanOne: true })).toEqual([0, 1]);
});
it(``, () => {
    expect(log.inequation('log3(x)>-1')).toBe("x > 0.33")
    expect(log.solveInEquations({ equations: ['log(3)/log(x)>0.5'], variable: 'x' })).toBe("1 < x < 9")
    expect(log.solveEquations({ equations: ['0=log(y)/log(0.3)', 'y=x^2-3*x'], variable: 'x' })).toBeCloseTo(-.303)
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