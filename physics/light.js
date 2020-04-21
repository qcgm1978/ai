
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
    getSinRatio() {
        return math.sin(this.angle) / math.sin(this.getRadians())
    }
    getSpeedRation() {
        return this.velocity / (this.getSpeed() * 1000)
    }
    getSpeed() {
        return math.round(this.velocity / this.waterRefractiveIndex / 1000)
    }
    getSpeedWithUnit() {
        return this.getSpeed() + 'km/s'
    }
    toDegrees(angle) {
        return angle * (180 / Math.PI);
    }
    getRadians() {
        return math.asin(math.sin(this.angle) / this.waterRefractiveIndex)
    }
    getAngle() {
        return this.toDegrees(math.asin(math.sin(this.angle) / this.waterRefractiveIndex))
    }
    isEqualRation() {

    }
}
module.exports = { Light }
