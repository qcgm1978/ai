const math = require('mathjs')
const nerdamer = require('nerdamer');
require('nerdamer/Solve.js')
class CalculusSet extends Set {
    constructor({ conditions = [], interval = [-Infinity, Infinity], except = [] } = {}) {
        super()
        this.conditions = conditions
        this.interval = interval
        this.except = except
        this.buildSet()
    }
    temp = []
    universal = new Set()
    and(...set) {
        this.temp = [...set, this]
        return this
    }
    getSubsetCount() {
        return 2 ** this.size
    }
    isDeletedNeighborhood() {
        const center = this.getCenter()
        return this.isNeighborhood() && this.except.includes(center)
    }
    isNeighborhood() {
        return !isNaN(this.getCenter())
    }
    getCenter() {
        return this.solveEquations({ equations: [`x-y=${this.interval[0]}`, `x+y=${this.interval[1]}`], variable: 'x' })
    }
    solveEquations({ equations = [], variable, isAll = false }) {
        if (arguments[0] instanceof Array) {
            var [equations, variable, isAll] = arguments
        }
        var sol = nerdamer.solveEquations(equations);
        if (isAll) {
            return sol
        } else {

            const firstSol = variable ? sol.find(item => item[0] === variable)[1] : sol[0][1]
            return firstSol;
        }
    }
    solveInEquations({ equations = [], variable }) {
        const signs = ['<', '>']
        const index = /</.test(equations[0]) ? 0 : 1
        const reg = new RegExp(`${variable}.*/`)
        const isNumerator = reg.test(equations[0])
        const resultSign = isNumerator ? signs[index] : signs.find(item => item !== signs[index])
        const equation = equations.map(item => item.replace(/<|>/g, '='))
        const num = +equation[0].match(/\=((\d|\.)+)/)[1]
        const sol = nerdamer.solveEquations(equation);
        let zeroStr = ''
        if (signs[index] === '>' && num > 0) {
            zeroStr = `1 < `
        }
        return `${zeroStr}${variable} ${resultSign} ${sol.find(item => item[0] === variable)[1]}`;
    }
    getRadius() {
        var sol = nerdamer.solveEquations([`x-y=${this.interval[0]}`, `x+y=${this.interval[1]}`]);
        return sol[1][1];
    }
    have(param) {
        // has the element
        const has = this.has(param)
        // satisfy condition
        const satisfyCondition = this.conditions.every(item => {
            return item instanceof Function ? item(param) : false
        })
        // in the interval
        const inInterval = this.inInterval(param)
        return has || satisfyCondition || inInterval
    }
    isInfinite() {
        return this.interval[0] === -Infinity || this.interval[1] === Infinity
    }
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
            item.map(val => {
                this.temp.map(it => {

                    it.universal.add(val)
                })
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
                if (this.has(value) && !this.temp.includes(value)) {

                    this.temp.push(value)
                }
            })
        })
        return this
    }
    unite(...set) {
        [...set, this].map(item => {

            item.forEach((value) => {
                if (!this.temp.includes(value)) {

                    this.temp.push(value)
                }
            })
        })

        return this
    }
    getResult() {
        const ret = [...this.temp]
        this.temp = []
        return ret
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
        this.addEle()
        // get elements by conditions
        return (param, calc = param => param) => {
            return this.conditions.every(item => item(param)) ? calc(param) : []
        }
    }
    inInterval(param) {

        return param > this.interval[0] && param < this.interval[1]
    }
    addEle(arr = this.conditions) {
        arr.map(item => {
            if (!(item instanceof Function)) {
                this.add(item)
                this.universal.add(item)
            }
        })
    }
    buildSetByArr(arr) {

        return new CalculusSet({ conditions: arr })
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
            return !math.im(num) && !!math.re(num)
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