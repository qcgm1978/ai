const math = require('mathjs')
require('../physicalConstants')
class RainDrop {
    constructor(config) {
        const defaults = {
            m: .001
        }
        Object.assign(this, defaults, config)
    }
    human = .6
    cat = .2
    // 假设没有任何外力施加或所施加的外力之和为零，则运动中物体总保持匀速直线运动状态，静止物体总保持静止状态
    getMotionState() {
        const gravity = this.getGravity()
        const resistance = this.getResistance()
        if (gravity === resistance) {
            return this.getTerminalVelocity()
        }
    }
    getResistance() {
        const formula = '1/2*ρ*v^2*Cd*A'
        const ρ = 1.29
    }
    getHumanTerminal() {
        return this.getTerminalVelocity(this.human)
    }
    getCatTerminal() {
        return this.getTerminalVelocity(this.cat)
    }
    getTerminalVelocity(d) {
        // return math.evaluate('sqrt(2*m*g/ρ*Cd*A)',{
        return math.evaluate('90*sqrt(d)', {
            // m:this.m,
            // g:math.gravity.value,
            // ρ:1.29,
            // Cd:
            d
        })
    }
    getGravity() {
        return +(this.m * math.gravity.value)
    }
}
module.exports = { RainDrop }