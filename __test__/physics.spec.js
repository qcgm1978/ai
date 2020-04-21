const { RainDrop, HarmonicMotion } = require('../physics/power')
const { Light } = require('../physics/light')
it(``, () => {
    const light = new Light({ angle: 20 })
    const speed = light.getSpeedWithUnit()
    const angle = light.getAngle()
    const speedRation = light.getSpeedRation()
    const sinRatio = light.getSinRatio()
    expect(sinRatio).toBe(1.33)
    expect(speedRation).toBeCloseTo(1.33)
    expect(speed).toBe('225408km/s')
    expect(angle).toBeCloseTo(43, 0)
    expect(speedRation).toBeCloseTo(sinRatio)
    // const isEqual = light.isEqualRation()
    // expect(isEqual).toBeTruthy()
});
it(``, () => {
    const harmonic = new HarmonicMotion()
    expect(harmonic.getPeriod()).toBeCloseTo(5067, 1)
    expect(harmonic.getMinute()).toBeCloseTo(84, 0)
});
it(``, () => {
    const rainDrop = new RainDrop({})
    expect(rainDrop.getHumanTerminal()).toBeCloseTo(70, -.3)//Math.pow(10,-(-.3))/2 ≈ 1, the precision ≈ 1
    expect(rainDrop.getCatTerminal()).toBeCloseTo(40, -.3)
    expect(rainDrop.getInsectTerminal()).toBeCloseTo(9, -.3)
    expect(rainDrop.getRainTerminal()).toBeCloseTo(4, -.3)
});