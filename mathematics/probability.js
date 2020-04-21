const math = require('./simplify')
require('../physicalConstants')
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
class Stock {
    constructor() { }
    // 1: front side, 0: reverse side
    man = [1, 0]
    woman = [1, 0]
    getCard(human) {
        const random = math.trunc(random = math.random() * 10) % 2
        return human[random]
    }
    getManCard() {
        return this.getCard(this.man)
    }
    getWommanCard() {
        return this.getCard(this.woman)
    }
    getResult() {
        const manCard = this.getManCard()
        const womanCard = this.getWomanCard()
        let result = 0
        switch (manCard + womanCard) {
            case 2:
                result = 3;
                break;
            case 0:
                result = 1;
                break;
            case 1:
                result = -2;
            default:
                result = null;

        }
        return result
    }
    getSimplifyFormula() {

        const formula = '3*x*y+1*(1-x)*(1-y)-2*x*(1-y)-2*(1-x)*y'
        const simplify = math.simplify(math.rationalize(formula)
        )
        let str = math.string(simplify)
        return str
    }
}
module.exports = { r, Probability, Stock }
