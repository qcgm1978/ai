const { RainDrop } = require('../physics/power')
it(``, () => {
    const rainDrop = new RainDrop({})
    expect(rainDrop.getTerminalVelocity(.6)).toBeCloseTo(70, -1)
});