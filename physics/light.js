
const math = require('mathjs')
require('../physicalConstants')
class Light {
    constructor(config) {
        const defaults = {
            velocity: math.speedOfLight.value,
            angle: 0

        }
        Object.assign(this, defaults, config)
    }
    waterRefractiveIndex = 1.33
    getSpeed() {
        return math.round(this.velocity / this.waterRefractiveIndex / 1000)
    }
    toDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    getAngle() {
        return this.toDegrees(math.asin(math.sin(this.angle) / this.waterRefractiveIndex))
    }
    isEqualRation() {

    }
}
module.exports = { Light }
