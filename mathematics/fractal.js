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
        return ret.length === this.iterCount + 1 && (ret[10] === ret[9])
    }
    getMandelbrotSetNum(config = {}) {
        const def = { coef: 0, ini: 1, arr: isNaN(config.ini) ? [1] : [config.ini], iterCount: 0 }
        config = { ...def, ...config }
        const num = this.getMandelbrotSet(config)
        if (num > 10 || config.iterCount >= this.iterCount) {
            return config.arr
        } else {
            config.arr.push(+num.toFixed(2))
            return this.getMandelbrotSetNum({ ...config, ini: num, iterCount: ++config.iterCount })
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