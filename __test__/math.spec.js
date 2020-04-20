const { simplify, parse, derivative } = require('mathjs')
it(`algebra`, () => {
    // math.js has support for symbolic computation (CAS). It can parse
    // expressions in an expression tree and do algebraic operations like
    // simplification and derivation on this tree.


    // simplify an expression
    console.log('simplify expressions')
    expect((simplify('3 + 2 / 4').toString())).toBe('7 / 2')
    expect((simplify('2x + 3x').toString())).toBe('5 * x')
    expect((simplify('2 * 3 * x', { x: 4 }).toString())).toBe('24')
    expect((simplify('x^2 + x + 3 + x^2').toString())).toBe('2 * x ^ 2 + x + 3')
    expect((simplify('x * y * -x / (x ^ 2)').toString())).toBe('-y')

    // work with an expression tree, evaluate results
    const f = parse('2x + x')
    const simplified = simplify(f)
    expect((simplified.toString())).toBe('3 * x')
    expect((simplified.evaluate({ x: 4 }))).toBe(12)
    console.log()

    // calculate a derivative
    console.log('calculate derivatives')
    expect((derivative('2x^2 + 3x + 4', 'x').toString())).toBe('4 * x + 3')
    expect((derivative('sin(2x)', 'x').toString())).toBe('2 * cos(2 x)')

    // work with an expression tree, evaluate results
    const h = parse('x^2 + x')
    const dh = derivative(h, 'x')
    expect((dh.toString())).toBe('2 * x + 1')
    expect((dh.evaluate({ x: 3 }))).toBe(7)
});