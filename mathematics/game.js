const math = require('mathjs')
class Landlords {
    constructor() { }
    partner = [2, 3]
    myCards = [12, 12, 3333, 14]
    opponent = [13, 13, 15]
    currentCards = 5
    currentPlayer = 'me'
    order = []
    setThreeCards() {

        if (this.currentPlayer === 'me') {
            this.handler()
        } else {
            const index = this.getIndex({ cards: this.opponent })

            if (this.opponent.length) {
                let card = this.getGreaterCard({ cards: this.opponent })
                this.opponent = this.getNewCards({ cards: this.opponent, index })
                this.currentPlayer = 'opponent'
            }
        }
        if (this.isVisitory() || this.isFailed()) {

            return this.order
        } else if (this.myCards.length && this.opponent.length) {
            this.setThreeCards()
        } else {
            return false
        }
        // return [null, 3333, [13, 13], 4]
    }
    handler() {
        const index = this.getIndex({ cards: this.myCards })
        let card = this.getGreaterCard({ cards: this.myCards })
        if (index !== -1) {
            this.myCards = this.getNewCards({ cards: this.myCards, index })
            this.currentCards = card
            this.order.push(card)
        } else {
            this.order.push(null)
            this.currentPlayer = 'opponent'
        }
    }
    getIndex({ cards }) {
        return cards.findIndex(item => item > this.currentCards)
    }
    getNewCards({ cards, index }) {
        if (cards.length) {

            return cards.slice(0, index).concat(cards.slice(index + 1))
        } else {
            return false
        }
    }
    getGreaterCard({ cards }) {
        return cards.find(item => item > this.currentCards)
    }
    isVisitory() {
        return !this.myCards.length || !this.partner.length
    }
    isFailed() {
        return !this.opponent.length
    }
}
class DoubleEggs {
    constructor({ floors, num = 2 }) {
        this.max = floors
        this.num = num
    }
    getRange({ min, max }) {
        return [min, max - 1]
    }
    getRemaining({ min, max }) {
        const range = this.getRange({ min, max })
        return range[1] - range[0]
    }
    getMax() {
        return this.max
    }
    dichotomy(n, m = 0) {
        if (n === 1) {
            return m
        } else {
            return this.dichotomy(Math.ceil(n / 2), ++m)

        }
    }
    getEvenlyNum(partNum, times = Math.ceil(this.max / partNum)) {
        let maxParts = 0
        if (this.num === 2) {
            maxParts = times
        }
        const min = times * partNum
        const secondEggNum = this.getRemaining({ min, max: min + partNum })
        return maxParts + secondEggNum
    }
    getNotEvenlyNum(differ = 1, times = this.GaussSummationFormula(this.max)) {
        let arr = []
        for (let i = times, m = 0; m < this.max; i--) {
            const n = m + i
            const currentTestFloor = n <= this.max ? n : this.max
            arr.push(currentTestFloor)
            m = currentTestFloor
        }
        return arr
        // let maxParts = 0
        // if (this.num === 2) {
        //     maxParts = times
        // }
        // const min = times * partNum
        // const secondEggNum = this.getRemaining({ min, max: min + partNum })
        // return maxParts + secondEggNum
    }
    GaussSummationFormula(floors) {
        return math.ceil(math.parse('(-b + sqrt(b^2 - 4*a*c)) / (2*a)').compile().evaluate({
            a: 1 / 2,
            b: 1 / 2,
            c: -100
        }))

        //  (n + 1) * n / 2>=100
    }

}
module.exports = { Landlords, DoubleEggs }