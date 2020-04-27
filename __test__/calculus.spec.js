const { CalculusSet } = require('../mathematics/calculus/set')
it(``, () => {
    const ins = new CalculusSet()
    const aSet = ins.getSet([1, 2, 3])
    expect(aSet).toBeInstanceOf(Set)
    expect(aSet.has(1)).toBeTruthy()
    expect(aSet.has(4)).toBeFalsy()
});