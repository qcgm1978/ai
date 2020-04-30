const { CalculusSet } = require('../mathematics/calculus/set')
const ins = new CalculusSet({ conditions: [CalculusSet.isN, n => n < 6] })
const a = new CalculusSet({ conditions: [1, 2, 3, 5] })
const b = new CalculusSet({ conditions: [3, 1, 2, 4] })
const c = new CalculusSet({ conditions: [3, 6, 7] })
const d = new CalculusSet({ conditions: [3, 1, 2, 5] })
const e = new CalculusSet({ conditions: [3, 1, 2, 5, 6] })
const f = new CalculusSet({ conditions: [] })
it(``, () => {
    const arr = [1, 2, 3];
    const arr1 = [1, 2, 3, 4, 5];

    expect(a.intersect(b).getResult()).toEqual(expect.arrayContaining(arr))
    expect(b.intersect(a).getResult()).toEqual(expect.arrayContaining(arr))
    const set = a.buildSetByArr(arr)
    expect(b.hasSet(set)).toBe(a.hasSet(set)).toBeTruthy()
    const arr2 = a.unite(b).getResult();

    expect(arr2).toEqual(expect.arrayContaining(arr1))
    expect(b.unite(a).getResult()).toEqual(expect.arrayContaining(arr1))
    const set1 = a.buildSetByArr(arr1)
    expect(set1.hasSet(a)).toBe(set1.hasSet(b)).toBeTruthy()
    expect(set1.size).toBe(a.size + b.size - a.intersect(b).getResult().length).toBe(5)
    expect(a.getSubsetCount()).toBe(16)
});
it(`interval`, () => {
    const ins = new CalculusSet({ interval: [-1, 5], conditions: [-1] })
    const ins2 = new CalculusSet({ interval: [-1, 5], conditions: [-1], except: [2] })
    const ins1 = new CalculusSet({ interval: [-Infinity, 5], conditions: [-1] })
    expect(ins.have(0)).toBeTruthy()
    expect(ins.have(-1)).toBeTruthy()
    expect(ins1.have(-100)).toBeTruthy()
    expect(ins.have(-1.1)).toBeFalsy()
    expect(ins.isInfinite()).toBeFalsy()
    expect(ins1.isInfinite()).toBeTruthy()
    expect(ins.getCenter()).toBe(2)
    expect(ins.getRadius()).toBe(3)
    expect(ins.isNeighborhood()).toBeTruthy()
    expect(ins.isDeletedNeighborhood()).toBeFalsy()
    expect(ins2.isDeletedNeighborhood()).toBeTruthy()

});
it(`calc`, () => {

    a.setUniversal([1, 2, 3, 4, 5, 6])
    expect(a.unite(b).complementary()).toEqual(expect.arrayContaining([6]))
});
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
