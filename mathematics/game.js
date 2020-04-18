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
    constructor({ floors }) {
        this.max = floors
    }
    getRange({ min, max }) {
        return [min, max - 1]
    }
    getRemaining() {
        const range = this.getRange()
        return range[1] - rang[0]
    }
    getMax() {
        return this.max
    }
}
module.exports = { Landlords, DoubleEggs }