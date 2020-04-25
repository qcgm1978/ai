class Fractal {
    constructor() { }
    BritishCoastline = 1.25
    SierpinskiTriangle = [3, 2]
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

}
module.exports = { Fractal }