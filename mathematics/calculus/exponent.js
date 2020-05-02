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
    translateFunc(str, left, top) {
        const replace = str.replace(/(=.*)x/, (`$1(x+${left})+${top}`))
        const arr = replace.split('=')
        const right = arr[1]
        arr[1] = nerdamer(`simplify(${right})`).toString().replace('*', '')
        return arr.join('=')
    }
    compareSolutions(arr) {
        const sols = arr.map((item) => {
            if (/lg/.test(item)) {
                const [express, base, antilog] = item.match(/lg(.*)\((.*)\)/)
                var equations = [item.replace(/lg.+/, `log(${antilog}) / log(${base})`)]
            }
            return this.solveEquations({ equations, isAll: true })
        })
        const sort = sols.sort((a, b) => {
            return a[0][1] < b[0][1] ? -1 : 1
        })
        return sort.map(item => item[0][0]).join('<')
    }
    compare(arr) {
        const range = arr.map((item, index) => {
            return { ['item' + (index + 1)]: this.inRange(item) }
        })
        const sort = range.sort((a, b) => {
            const aMax = Object.values(a)[0][1]
            const bMax = Object.values(b)[0][1]
            const sizeCompare = aMax > bMax

            return sizeCompare ? 1 : -1
        })
        const len = sort.length
        return sort.reduce((acc, item, index) => {
            return acc + Object.keys(item) + ((len === index + 1) ? '' : '<')
        }, '')
    }
    inRange({ expression, isMoreThanOne, antilogGreater }) {
        if (/lg/.test(expression)) {

            const [express, base, antilog] = expression.match(/lg(.*)\((.*)\)/)
            const positive = antilogGreater ? [0, 1] : [1, Infinity]
            if (antilog < 1) {
                return isMoreThanOne ? [-Infinity, 0] : positive
            } else {

                return isMoreThanOne ? positive : [-Infinity, 0]
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