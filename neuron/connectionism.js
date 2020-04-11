//  learning occurs by modifying connection strengths based on experience
class Connectionism {
    constructor() { }
    weight = 0
    arr = []
    activation = 0
    learn(n) {
        if (this.arr.includes(n)) {
            this[`weight_${n}`] += .1
            this.setActivation(this[`weight_${n}`])
        } else {
            this[`weight_${n}`] = 0
            this.arr.push(n)
        }
    }
    // if the units in the model are neurons, the activation could represent the probability that the neuron would generate an action potential spike
    setActivation(prob) {
        this.activation = prob
    }
}
module.exports = { Connectionism }