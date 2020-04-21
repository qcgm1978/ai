const { Hanoi } = require('../mathematics/game')
it(``, () => {
    const haoni = new Hanoi({ layers: 64 })
    expect(haoni.getPillar()).toEqual(63);
    expect(haoni.getPillar({ pillar: 0 })).toEqual(63);
    expect(haoni.getPillar({ pillar: 0, layer: 0 })).toEqual(63);
    expect(haoni.getPillar({ pillar: 0, layer: 10 })).toEqual(53);
    expect(haoni.getPillar({ pillar: 1, layer: 0 })).toBeUndefined();
});