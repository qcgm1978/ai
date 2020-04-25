const math = require('mathjs')
class Fractal {
    constructor() { }
    BritishCoastline = 1.25
    SierpinskiTriangle = [3, 2]
    MandelbrotSet = 'f(x,c)=x^2+c'
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
    getMandelbrotSetNum(coef = 0, ini = 1, arr = [ini]) {
        const num = this.getMandelbrotSet(ini, coef)
        if (num > 10) {
            return arr
        } else {
            arr.push(num)
            return this.getMandelbrotSetNum(coef, num, arr)
        }
    }
    getMandelbrotSet(x, coef) {
        const parser = new math.parser()

        // define variables and functions
        parser.evaluate(this.MandelbrotSet)    // f(x, y)
        return parser.evaluate(`f(${x}, ${coef})`)
    }

}
module.exports = { Fractal }