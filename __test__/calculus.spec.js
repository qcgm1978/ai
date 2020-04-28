const { CalculusSet } = require('../mathematics/calculus/set')
const ins = new CalculusSet({ conditions: [CalculusSet.isN, n => n < 6] })
it(``, () => {
    const aSet = ins.getSet([1, 2, 3])
    expect(aSet).toBeInstanceOf(Set)
    expect(aSet.has(1)).toBeTruthy()
    expect(aSet.has(4)).toBeFalsy()
});
it(``, () => {
    expect(ins.oddSet(1)).toBeTruthy()
    expect(ins.oddSet(1.1)).toBeFalsy()
    expect(ins.oddSet(11)).toBeFalsy()
    expect(CalculusSet.isN(11)).toBeTruthy()
    expect(ins.isZ(0)).toBeTruthy()
    expect(ins.isQ('1+3i')).toBeFalsy()
    expect(ins.isQ('1')).toBeTruthy()
    expect(ins.isR('1')).toBeTruthy()
    expect(ins.isR('a')).toBeFalsy()
    const twoSet = ins.buildSet()
    expect(twoSet(2, n => 2 * n - 1)).toBe(3)
});
it(``, () => {
    expect(ins.hasElement(3)).toBeTruthy()
    const a = new CalculusSet({ conditions: [1, 2, 3, 5] })
    const b = new CalculusSet({ conditions: [3, 1, 2, 4] })
    const c = new CalculusSet({ conditions: [3, 1, 2] })
    const d = new CalculusSet({ conditions: [3, 1, 2, 5] })
    const e = new CalculusSet({ conditions: [3, 1, 2, 5, 6] })
    expect(a.isEqualTo(b)).toBeFalsy()
    expect(a.isEqualTo(c)).toBeFalsy()
    expect(a.isEqualTo(d)).toBeTruthy()
    expect(a.isEqualTo(e)).toBeFalsy()
    expect(d.isEqualTo(a)).toBeTruthy()
});