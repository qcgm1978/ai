const { Fractal } = require('../mathematics/fractal')
it(``, () => {
    const fractal = new Fractal()
    expect(fractal.getDimension(2, 2)).toBe(1)
    expect(fractal.getDimension(8, 2)).toBe(3)
    expect(fractal.getDimension(4, 3)).toBeCloseTo(1.26)
    expect(fractal.getSierpinskiTriangle()).toBeCloseTo(1.58)
    // expect(fractal.getMandelbrotSet()).toBe(2)
    expect(fractal.getMandelbrotSetNum(1)).toEqual([1, 2, 5])
});
