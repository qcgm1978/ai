const math = require('mathjs')
const constants = require('./physicalConstants')
class CommonSense {
    constructor() { }
    getUrl(location) {
        return ['protocol', 'hostname', 'pathname', 'search', 'hash'].reduce((acc, item, index) => acc + location[item] + (index ? '' : '//'), '')
    }
    getGravity(M, m, r) {
        return math.evaluate('G*M*m/r^2', { M, m, r, G: math.gravity })
    }
}
module.exports = { CommonSense }