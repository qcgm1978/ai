const { RainDrop } = require('../physics/power')
it(``, () => {
    const rainDrop = new RainDrop({})
    expect(rainDrop.getHumanTerminal()).toBeCloseTo(70, -.3)//Math.pow(10,-(-.3))/2 ≈ 1, the precision ≈ 1
    expect(rainDrop.getCatTerminal()).toBeCloseTo(40, -.3)
});