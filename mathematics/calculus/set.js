const math = require('mathjs')
class CalculusSet {
    constructor({ conditions = [] }) {
        this.conditions = conditions
        this.set = this.buildSet()
    }
    hasElement(ele) {
        return this.set.has(ele)
    }
    buildSet() {
        this.set = new Set()
        this.set.has = (param) => this.conditions.every(item => item(param))
        return (param, calc) => this.conditions.every(item => item(param)) ? calc(param) : []
    }

    isZ(num) {
        return Number.isInteger(num)

    }
    isQ(num) {
        num = math.complex(num)
        return !!!math.im(num)

    }
    isR(num) {
        try {

            num = math.complex(num)
            return !!math.im(num) || !!math.re(num)
        } catch{
            return false
        }

    }
    isPositiveR(num) {
        return this.isR(num) && num > 0
    }
    isNegtiveR(num) {
        return !(this.isR(num) && num > 0)
    }
    isNonZeroR(num) {
        return this.isR(num) && n !== 0
    }
    oddSet(num) {
        return Number.isInteger(num) && num >= 1 && num <= 9
    }
    getSet(arr = []) {
        const set = new Set()
        arr.map(item => set.add(item))
        return set
    }
}
CalculusSet.isN = (num) => {
    return Number.isInteger(num) && num > 0

}
module.exports = { CalculusSet }