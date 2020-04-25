class Logrithm {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getLog(base, pow) {
        return Math.log(pow) / Math.log(base)
    }
    getRatio() {
        return this.x / this.y
    }

}
module.exports = { Logrithm }