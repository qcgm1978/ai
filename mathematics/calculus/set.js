const math = require('mathjs')
class CalculusSet extends Set {
    constructor({ conditions = [] }) {
        super()
        this.conditions = conditions
        this.set = this.buildSet()
    }
    temp = []
    universal = new Set()
    complementary() {
        const arr = []
        this.universal.forEach((value) => {
            if (this.temp.includes(value)) {

            } else {
                arr.push(value)

            }
        })

        return arr
    }
    setUniversal(...arr) {
        arr.map(item => {
            item.forEach(val => {
                this.universal.add(val)
            })
        })
        return this
    }

    difference(set) {
        const arr = []
        this.forEach((value) => {
            if (set.has(value)) {

            } else {
                arr.push(value)

            }
        })
        return arr
    }
    intersect(...set) {
        set.map(item => {

            item.forEach((value) => {
                if (this.has(value)) {

                    this.temp.push(value)
                }
            })
        })
        return this
    }
    unite(...set) {
        set.map(item => {

            item.forEach((value) => {
                this.add(value)
            })
        })
        this.forEach((value) => {
            this.temp.push(value)
        })
        return this
    }
    getResult() {
        const ret = [...this.temp]
        this.temp = []
        return ret
    }
    hasElement(ele) {
        return this.set.have(ele)
    }
    isEmptySet() {
        return !!!this.size
    }

    hasSet(set) {
        let ret = true
        set.forEach((value) => {
            if (this.has(value)) {
                return
            } else {
                ret = false
            }
        })
        return ret
    }

    isEqualTo(set) {
        if (this.size !== set.size) {
            return false
        }
        return this.hasSet(set)
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
                this.universal.add(item)
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