const math = require('mathjs')
require('../physicalConstants')
class ToiletPaperWidth {
    constructor(config = {}) {
        const defaults = { section: 0, sectionLen: 0, R: 0, r: 0, thickness: 0, unit: 'mm' }
        Object.assign(this, defaults, config)
    }
    unit = 'mm'
    calLength(unit) {
        if (this.section) {

            const len = this.section * this.sectionLen
            return `${unit === 'm' ? len / 1000 : len}${unit}`
        } else {
            return this.calByArea()
        }
    }
    calByArea(unit = 'm') {
        const areaByRadius = Math.PI * (this.R ** 2 - this.r ** 2)
        const len = math.evaluate(`x=areaByRadius/thickness`, {
            thickness: this.thickness,
            areaByRadius
        })
        return (unit === 'm' ? len / (this.unit === 'cm' ? 100 : 1000) : len).toFixed(0) + unit
    }


}
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
    constructor(params = {}) {
        const ini = { laborIncome: 0, salary: [[0, 0]], hasHouseLoad: false, residence: false, isOnlyChild: false }
        params = { ...ini, ...params }
        for (let p in params) {
            this[p] = params[p]
        }
    }
    monthZeroBracketAmount = .5
    laborTaxRate = .8
    salaryTaxRange = [[3.6, .03], [14.4, .1], [42, .2], [66, .25], [96, .35], [Infinity, .45]]
    laborTaxRange = [[0, .08, _ => 0], [.08, .4, income => income - .08], [.4, Infinity, income => income * .8]]
    getTotalDrawback() {
        const totalSalary = this.getTotalSalary()
        const totalLaborIncome = this.laborIncome * this.laborTaxRate
        const payableTax = this.getTax(totalSalary + totalLaborIncome)
        const actualWithhold = this.getActualWithhold() + this.getLaborServiceTax()
        return +(payableTax - actualWithhold).toFixed(3)
    }
    getSalaryDrawback() {
        return this.getPayableWithhold() - this.getActualWithhold()
    }
    getLaborDrawback() {
        return +(this.getPayableLaborWithhold() - this.getLaborServiceTax()).toFixed(3)
    }
    hasDrawback() {
        return this.getTotalSalary() < 12 || (this.getSalaryDrawback() <= 400 && this.getSalaryDrawback() > 0) || (this.getLaborDrawback() <= 400 && this.getLaborDrawback() > 0)
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
        const totalSalary = this.getTotalSalary()
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
    getPayableLaborWithhold(laborIncome = this.laborIncome) {

        let current = laborIncome * this.laborTaxRate
        return this.getTax(current)
    }
    getTax(total) {
        total -= this.monthZeroBracketAmount * 12
        return +this.salaryTaxRange.reduce((acc, it) => {
            if (total > 0) {

                if (total >= it[0]) {
                    acc += it[0] * it[1]
                } else {
                    acc += total * it[1]
                }
                total -= it[0]
            }
            return acc
        }, 0).toFixed(3)
    }
    getLaborTaxableIncome(income = this.laborIncome) {
        this.laborTaxRange.map((item) => {
            if (income <= item[1] && income >= item[0]) {
                income = item[2](income)
            }
        }, 0)
        return +income.toFixed(2)
    }
    getTotalSalary() {
        return this.salary.reduce((acc, item) => {
            return acc + item[0] * item[1]
        }, 0)
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
        }, 0).toFixed(3)
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
        return this.salary + this.getLaborServiceTax * this.laborTaxRate + this.remuneration * .8 * .7 + this.patent * .8
    }
    getExemption() { }

}
module.exports = { CommonSense, Drawback, ToiletPaperWidth }