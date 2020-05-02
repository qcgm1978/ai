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
    inRange({ expression, isMoreThanOne }) {
        if (/lg/.test(expression)) {

            const [express, base, antilog] = expression.match(/lg(.*)\((.*)\)/)
            if (antilog < 1) {
                return isMoreThanOne ? [-Infinity, 0] : [0, Infinity]
            } else {

                return isMoreThanOne ? [0, Infinity] : [-Infinity, 0]
            }
        } else {
            const [express, base, log] = expression.match(/(.+)\^(.+)/)
            if (log > 0) {
                return isMoreThanOne ? [1, Infinity] : [0, 1]
            } else {
                return isMoreThanOne ? [0, 1] : [1, Infinity]

            }
        }
    }
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