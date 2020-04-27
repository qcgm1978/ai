const { RainDrop, HarmonicMotion } = require('../physics/power')
const { Light } = require('../physics/light')
const { Quantum } = require('../physics/quantum')
const math = require('mathjs')
require('../physicalConstants')
it(``, () => {
    const quantum = new Quantum()
    expect(quantum.getSpecicalRelativity({ v1: 1, v2: 2 })).toBeCloseTo(3)
    expect(quantum.getSpecicalRelativity({ v1: math.speedOfLight.value, v2: math.speedOfLight.value })).toBeCloseTo(math.speedOfLight.value)
    expect(quantum.getSpecicalRelativity.bind({ v1: math.speedOfLight.value, v2: 2 * math.speedOfLight.value })).toThrow()
    expect(math.number(math.unit('52cm'), 'm')).toBe(.52)
    expect(math.number(math.unit('1g'), 'kg')).toBe(.001)
    expect(math.number(math.unit('1PJ'), 'joule')).toBe(1e15)
    expect(quantum.getEnergy('1g')).toBeCloseTo(4.3)
});
it(``, () => {
    // const earth = new Earth()
    // const mass = earth.solve()
    // expect(mass).toBeCloseTo(6e24, -23)
});
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