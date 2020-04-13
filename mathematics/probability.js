const Prob = require('prob.js')
var r = Prob.normal(0, 1.0); // μ = 0, σ = 1.0 
class Probability {
    constructor() { }
    getAProb() {
        return Prob.uniform(0, 1)()
    }
    // probabilities can be numerically described by the number of desired outcomes divided by the total number of all outcomes
    calcProb(desired, total) {
        return +(desired / total).toFixed(2)
    }
    Tao = {
        // sufficiently different priors can lead to different conclusions
        subjective: priors => {
            return priors
        },
        // experiment to yield a certain outcome
        objective: experiment => {
            return experiment * Math.random()
        }
    }
}
module.exports = { r, Probability }
