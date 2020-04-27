const math = require('mathjs')
require('../physicalConstants')
class Quantum {
    constructor() { }
    lorentzFormula = 'f(v1,v2,c)=(v1+v2)/(1+v1*v2/c^2)'
    massEnergyConversion = 'f(m,c)=m*c^2'
    getSpecicalRelativity({ v1, v2 }) {
        if (v1 > math.speedOfLight.value || v2 > math.speedOfLight.value) {
            throw new Error('no more than light speed')
        }
        const parser = new math.parser()
        parser.evaluate(this.lorentzFormula)
        return parser.evaluate(`f(${v1}, ${v2},${math.speedOfLight.value})`)
    }
    getEnergy(m) {
        if (typeof m === 'string') {
            m = math.number(math.unit(m), 'kg')
        }
        const peta = m * 89.8 // The complete conversion of 1 kg of matter into pure energy would yield the theoretical maximum (E = mc2) of 89.8 petajoules
        // const parser = new math.parser()
        // parser.evaluate(this.massEnergyConversion)
        // let energy = parser.evaluate(`f(${m}, ${math.speedOfLight.value})`)

        // energy = math.number(math.unit(`${energy}PJ`), 'joule')
        const Tg = peta / 4.184
        const Pg = Tg * 1e2
        return +(Pg * 2).toFixed(1)
    }
}
module.exports = { Quantum }