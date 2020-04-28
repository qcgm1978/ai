const math = require('mathjs')
class CalculusSet extends Set {
    constructor({ conditions = [] }) {
        super()
        this.conditions = conditions
        this.set = this.buildSet()
    }
    hasElement(ele) {
        return this.set.have(ele)
    }
    isEqualTo(set) {
        if (this.size !== set.size) {
            return false
        }
        let ret = true
        this.forEach(function (value) {
            if (set.has(value)) {
                return
            } else {
                ret = false
            }
        })
        return ret
    }
    buildSet() {
        this.set = new Set()
        this.set.have = (param) => this.conditions.every(item => item(param))
        this.addEle()
        return (param, calc) => {
            return this.conditions.every(item => item(param)) ? calc(param) : []
        }
    }
    addEle() {
        this.conditions.map(item => {
            if (!(item instanceof Function)) {
                this.add(item)
            }
        })
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