const Prob = require('prob.js')
var r = Prob.normal(0, 1.0); // μ = 0, σ = 1.0 

class Chaos {
    constructor(num) {
        this.num = num;
    }
    getResult() {
        Chaos.ini = !Chaos.ini
        return Chaos.ini
    }
}
Chaos.ini = true
module.exports = { r, Chaos }
