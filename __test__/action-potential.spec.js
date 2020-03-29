const { ActionPotential } = require('../neuron/action-potential')

it(` If the voltage changes by a large enough amount over a short interval, the neuron generates an all-or-nothing electrochemical pulse called an action potential.`, () => {
    const ins = new ActionPotential();
    expect(ins.ini.sodiumInterval).toBe(.5)
    expect(ins.getCycleInterval()).toBeGreaterThan(.5).toBeLessThan(100)
});