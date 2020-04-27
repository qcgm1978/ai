const math = require('mathjs')
require('../physicalConstants')
class Quantum {
    constructor() { }
    lorentzFormula = 'f(v1,v2,c)=(v1+v2)/(1+v1*v2/c^2)'
    getSpecicalRelativity({ v1, v2 }) {
        if (v1 > math.speedOfLight.value || v2 > math.speedOfLight.value) {
            throw new Error('no more than light speed')
        }
        const parser = new math.parser()
        parser.evaluate(this.lorentzFormula)
        return parser.evaluate(`f(${v1}, ${v2},${math.speedOfLight.value})`)
    }
}
module.exports = { Quantum }