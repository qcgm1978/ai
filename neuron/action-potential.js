// In physiology, an action potential occurs when the membrane potential of a specific cell location rapidly rises and falls
class ActionPotential {
    // If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.
    ini = {
        sodiumInterval: .5,//Sodium-based action potentials usually last for under one millisecond, but calcium-based action potentials may last for 100 milliseconds or longer.
        calciumInterval: 100,
        // A typical voltage across an animal cell membrane is −70 mV.
        typicalVoltage: -70

    }
    getCycleInterval() {
        return this.ini.sodiumInterval + Math.random() * (this.ini.calciumInterval - this.ini.sodiumInterval)
    }
}
module.exports = { ActionPotential }