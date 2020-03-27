const Prob = require('prob.js')
var r = Prob.normal(0, 1.0); // μ = 0, σ = 1.0 

class Chaos {
    constructor(num) {
        this.num = num;
    }
    signal = ''
    getResult() {
        Chaos.ini = !Chaos.ini
        return Chaos.ini
    }
    // At the majority of synapses, signals cross from the axon of one neuron to a dendrite of another. 
    axon() {
        return 'axon'
    }
    dendrite(signal) {
        this.signal = signal
    }
}
Chaos.ini = true
module.exports = { r, Chaos }
