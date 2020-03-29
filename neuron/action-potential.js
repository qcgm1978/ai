// In physiology, an action potential occurs when the membrane potential of a specific cell location rapidly rises and falls
class ActionPotential {
    // If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.
    ini = {
        SodiumInterval: .5,//Sodium-based action potentials usually last for under one millisecond, but calcium-based action potentials may last for 100 milliseconds or longer.
        calciumInterval: 100
    }
}
module.exports = { ActionPotential }