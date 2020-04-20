const math = require('mathjs')
const constants = require('./physicalConstants')
class CommonSense {
    constructor() { }
    getUrl(location) {
        return ['protocol', 'hostname', 'pathname', 'search', 'hash'].reduce((acc, item, index) => acc + location[item] + (index ? '' : '//'), '')
    }
    getGravity(M, m, r) {
        return math.evaluate('G*M*m/r^2', { M, m, r, G: math.gravity })
    }
}
class Drawback {
    constructor(params = { laborIncome: 0, salary: [[0, 0]], hasHouseLoad: false, residence: false, isOnlyChild: false }) {
        for (let p in params) {
            this[p] = params[p]
        }
    }
    monthZeroBracketAmount = .5
    salaryTaxRange = [[3.6, .03], [14.4, .1], [42, .2], [66, .25], [96, .35], [Infinity, .45]]
    laborTaxRange = [[0, .08, _ => 0], [.08, .4, income => income - .08], [.4, Infinity, income => income * .8]]
    getDrawback() {
        return this.getPayableWithhold() - this.getActualWithhold()
    }
    getActualWithhold(salary = this.salary) {
        return +salary.reduce((acc, item) => {
            let current = item[0] * item[1]
            current = item[0] > this.monthZeroBracketAmount ? (current - this.monthZeroBracketAmount * item[1]) : current
            return acc + this.salaryTaxRange.reduce((acc, it) => {
                if (current > 0) {

                    if (current >= it[0]) {
                        acc += it[0] * it[1]
                    } else {
                        acc += current * it[1]
                    }
                    current -= it[0]
                }
                return acc
            }, 0)
        }, 0).toFixed(3)
    }
    getPayableWithhold() {
        const totalSalary = this.salary.reduce((acc, item) => {
            return acc + item[0] * item[1]
        }, 0)
        let current = totalSalary - this.monthZeroBracketAmount * 12
        return +this.salaryTaxRange.reduce((acc, it) => {
            if (current > 0) {

                if (current >= it[0]) {
                    acc += it[0] * it[1]
                } else {
                    acc += current * it[1]
                }
                current -= it[0]
            }
            return acc
        }, 0).toFixed(3)
    }
    getFinalSettlement() {
        return this.accIncome - this.accExeption - this.accDeduct - this.getAccIncomeTax()
    }
    getLaborTaxableIncome(income = this.laborIncome) {
        this.laborTaxRange.map((item) => {
            if (income <= item[1] && income >= item[0]) {
                income = item[2](income)
            }
        }, 0)
        return +income.toFixed(2)
    }
    getTotalSalary(total) {
        return +(total - this.getLaborServiceTax(total)).toFixed(2)
    }
    getLaborServiceTax(income = this.laborIncome) {
        const taxableIncome = this.getLaborTaxableIncome(income)
        const taxRate = [[2, .2], [5, .3], [Infinity, .4]]
        let enableCal = true
        return +taxRate.reduce((acc, item, index) => {
            if (enableCal) {

                const prev = index ? taxRate[index - 1][0] : 0
                if (taxableIncome >= item[0]) {
                    acc += (item[0] - prev) * item[1]
                } else {
                    acc += (taxableIncome - prev) * item[1]
                    enableCal = false
                }
            }
            return acc
        }, 0).toFixed(2)
    }
    getAccIncomeTax() {
        return this.salary.reduce((acc, item) => {
            return acc + item[0] * item[1]
        }, 0)
    }
    getIncomeTax() {
        const range = this.salaryTaxRange
        const income = this.getTaxableIncome()
        const tax = range.reduce((acc, item) => {

        }, 0)
        return tax
    }
    getTaxableIncome() {
        return this.getConsolidatedIncomeTax() - this.getExemption() - this.getDeduct()
    }
    getDeduct() {
        return this.threeOne + this.getAddiction()
    }
    getAddiction() {
        return this.getChildrenEducation + this.getAdultEducation() + this.getTreatment() + this.getResidence() + this.supportOld()
    }
    supportOld() {
        return this.isOnlyChild ? 2.4 : 1.2
    }
    getResidence() {
        const rent = this.getRent()
        const loan = this.getHouseLoan()
        return rent > loan ? rent : loan
    }
    getRent() {
        const types = {
            city: 1.8,
            suburb: 1.3,
            town: .96,
            false: 0
        }
        return tyes[this.residence]
    }
    getHouseLoan() {
        return this.hasHouseLoad ? 1.2 : 0
    }
    getConsolidatedIncomeTax() {
        return this.salary + this.getLaborServiceTax * .8 + this.remuneration * .8 * .7 + this.patent * .8
    }
    getExemption() { }

}
module.exports = { CommonSense, Drawback }