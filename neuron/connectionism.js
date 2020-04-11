//  learning occurs by modifying connection strengths based on experience
class Connectionism {
    constructor() { }
    weight = 0
    arr = []
    learn(n) {
        if (this.arr.includes(n)) {
            this[`weight_${n}`] += .1
        } else {
            this[`weight_${n}`] = 0
            this.arr.push(n)
        }
    }
}
module.exports = { Connectionism }