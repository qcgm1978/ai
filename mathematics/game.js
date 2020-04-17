class Landlords {
    constructor() { }
    partner = [2, 3]
    myCards = [12, 12, 3333, 4]
    opponent = [13, 13, 14]
    currentCards = 5
    ending = {
        setThreeCards() {
            return [null, 3333, [13, 13], 4]
        }
    }
    isVisitory() {
        return !this.myCards.length || !this.partner.length
    }
}
module.exports = { Landlords }