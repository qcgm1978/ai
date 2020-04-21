const { Hanoi } = require('../mathematics/game')
it(``, () => {
    const haoni = new Hanoi({ layers: 64 })
    expect(haoni.getPillar()).toEqual(64);
    expect(haoni.getPillar({ pillar: 0 })).toEqual(64);
    expect(haoni.getPillar({ pillar: 0, layer: 0 })).toEqual(64);
    expect(haoni.getPillar({ pillar: 0, layer: 10 })).toEqual(54);
    expect(haoni.getPillar({ pillar: 1, layer: 0 })).toBe(0);
    const oneHanoi = new Hanoi({ layers: 1 })
    expect(oneHanoi.move()).toEqual([[0, 2]])
    expect(oneHanoi.finalPillars).toEqual([[0], [0], [1]])
}); 