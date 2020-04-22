class Algorithm {
    constructor() { }
    sucessiveDivision(a, b) {
        if (b) {

            const remaining = a % b
            return this.sucessiveDivision(b, remaining)
        } else {
            return a
        }
    }
}
module.exports = { Algorithm }