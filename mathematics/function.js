const math = require('mathjs')
class OddFunction {
    constructor({ relation = 1, arithmetic = 'multiply' } = {}) {
        this.relation = relation
        this.arithmetic = arithmetic
    }
    getFunctionVal(x) {
        return math[this.arithmetic](-x, this.relation)
    }
}
module.exports = { OddFunction }