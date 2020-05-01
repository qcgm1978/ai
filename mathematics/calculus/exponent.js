const { CalculusSet } = require('./set')
const nerdamer = require('nerdamer');
require('nerdamer/Solve.js')
class Exponent extends CalculusSet {
    constructor() {
        super()
    }
    isInDomain = this.isR
    isInCodomain = this.isPositiveR
}
class Logarithm extends CalculusSet {
    constructor() {
        super()
    }
    isInDomain = this.isPositiveR
    isInCodomain = this.isR
    inequation(expression) {
        const [, base, power, sign, lg] = expression.match(/log(.+)\((.+)\)(.)(-?.+)/)
        const decimal = (base ** lg).toFixed(2)

        return `${power} ${sign} ${decimal}`
    }
    getLog(base, power) {
        return Math.log(power) / Math.log(base)
    }
}
module.exports = { Exponent, Logarithm }