// In physiology, an action potential occurs when the membrane potential of a specific cell location rapidly rises and falls
class ActionPotential {
    // If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.
    ini = {
        sodiumInterval: .5,//Sodium-based action potentials usually last for under one millisecond, but calcium-based action potentials may last for 100 milliseconds or longer.
        calciumInterval: 100,
        // A typical voltage across an animal cell membrane is −70 mV.
        typicalVoltage: -70,
        // threshold potential is around –55 mV.
        thresholdVoltage: -55

    }
    getCycleInterval() {
        return this.ini.sodiumInterval + Math.random() * (this.ini.calciumInterval - this.ini.sodiumInterval)
    }
    // The course of the action potential can be divided into five parts: the rising phase, the peak phase, the falling phase, the undershoot phase, and the refractory period.
    getCourseData() {
        const data = [[0, -70], [1.3, -70], [1.5, -55], [2, 40], [3, -90], [5, -70]]
        return data
    }
    getRising() {
        return this.ini.thresholdVoltage
    }
    getPeak() {
        return 40
    }
    getFalling() {
        return this.ini.typicalVoltage
    }
    getUndershoot() { }
    getRefractory() { }
}

export { ActionPotential }