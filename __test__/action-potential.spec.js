const { ActionPotential } = require('../neuron/action-potential')
it(` If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.`, () => {
    expect(new ActionPotential().ini.SodiumInterval).toBe(.5)
});