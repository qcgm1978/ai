const { Hanoi } = require('../mathematics/game')
it(``, () => {
    const haoni = new Hanoi({ layers: 64 })
    expect(haoni.getPillar()).toEqual(63);
    expect(haoni.getPillar({ pillar: 0 })).toEqual(63);
    expect(haoni.getPillar({ pillar: 0, layer: 0 })).toEqual(63);
    expect(haoni.getPillar({ pillar: 0, layer: 10 })).toEqual(53);
    expect(haoni.getPillar({ pillar: 1, layer: 0 })).toBe(0);
    const oneHanoi = new Hanoi({ layers: 1 })
    expect(oneHanoi.move()).toEqual([[0, 2]])
    const twoHanoi = new Hanoi({ layers: 2 })
    expect(twoHanoi.move()).toEqual([[0, 1], [0, 2], [1, 2]])
    expect(twoHanoi.moveToTarget(1)).toEqual([[0, 2], [0, 1], [2, 1]])
    const threeHanoi = new Hanoi({ layers: 3 })
    expect(threeHanoi.move()).toEqual([[0, 2], [0, 1], [2, 1], [0, 2], [1, 0], [1, 2], [0, 2]])
}); 