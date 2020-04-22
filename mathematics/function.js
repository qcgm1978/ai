const math = require('mathjs')
class OddFunction {
    constructor({ relation = 1 } = {}) {
        this.relation = relation
    }
    getFunctionVal(x) {
        return -x * this.relation
    }
}
module.exports = { OddFunction }