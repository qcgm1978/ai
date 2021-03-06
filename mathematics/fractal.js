const math = require('mathjs')
class Fractal {
    constructor() { }
    BritishCoastline = 1.25
    SierpinskiTriangle = [3, 2]
    MandelbrotSet = 'f(x,c)=x^2+c'
    iterCount = 10
    getDimension(count, ratio) {
        if (count instanceof Array) {
            ratio = count[1]
            count = count[0]
        }
        return Math.log2(count) / Math.log2(ratio)
    }
    getSierpinskiTriangle() {
        return this.getDimension(this.SierpinskiTriangle)
    }
    isMandelbrotSet(config) {
        const ret = this.getMandelbrotSetNum(config)
        if (ret.length === this.iterCount + 1) {
            const isVibrate = (ret[10] === ret[8] && ret[9] === ret[7])
            const isConvergence = ret[10] === ret[9]
            return isVibrate || isConvergence
        }
        return false
    }
    isJuliaSet(config) {
        const ret = this.getJuliaSet(config)
        if (ret.length === this.iterCount + 1) {
            const isVibrate = (ret[10] === ret[8] && ret[9] === ret[7])
            const isConvergence = ret[10] === ret[9]
            return isVibrate || isConvergence
        }
        return false
    }
    getMandelbrotSetNum(config = {}) {
        const def = { coef: 0, ini: 1, arr: isNaN(config.ini) ? [1] : [config.ini], iterCount: 0 }
        config = { ...def, ...config }
        const num = this.getMandelbrotSet(config)
        if (num > 10 || config.iterCount >= this.iterCount) {
            return config.arr
        } else {
            config.arr.push(isNaN(num) ? (`${math.re(num).toFixed(2)}+${math.im(num).toFixed(2)}i`) : +num.toFixed(2))
            return this.getMandelbrotSetNum({ ...config, ini: num, iterCount: ++config.iterCount })
        }
    }
    getJuliaSet(config = {}) {
        const def = { coef: 0, ini: 1, arr: isNaN(config.ini) ? [1] : [config.ini], iterCount: 0 }
        config = { ...def, ...config }
        const num = this.getMandelbrotSet(config)
        if (num > 10 || config.iterCount >= this.iterCount) {
            return config.arr
        } else {
            config.arr.push(isNaN(num) ? (`${math.re(num).toFixed(2)}+${math.im(num).toFixed(2)}i`) : +num.toFixed(2))
            return this.getMandelbrotSetNum({ ...config, ini: ++config.ini, iterCount: ++config.iterCount })
        }
    }
    getMandelbrotSet({ ini, coef }) {
        const parser = new math.parser()

        // define variables and functions
        parser.evaluate(this.MandelbrotSet)    // f(x, y)
        return parser.evaluate(`f(${ini}, ${coef})`)
    }

}
module.exports = { Fractal }