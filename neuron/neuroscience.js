
class Chaos {
    constructor(num) {
        this.num = num;
    }
    signal = ''
    ini = {
        // There are 50 trillion cells X .07volts = 3.5 trillion volts.
        netVoltage: 3.5
    }
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
    // Synaptic signals may be excitatory or inhibitory, increasing or reducing the net voltage that reaches the soma.
    excitatory() {
        return ++this.ini.netVoltage
    }
    inhibitory() {
        return --this.ini.netVoltage
    }

}
Chaos.ini = true
module.exports = { Chaos }
