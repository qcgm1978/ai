class CalculusFunction {
    constructor() { }
    throwDomainErr(x) {
        throw new Error('x isn\'t in the domain of definition')
    }
    divide(a, b) {
        if (b) {
            return a / b
        } else {
            this.throwDomainErr()
        }
    }
    squareroot(a) {
        if (a >= 0) {
            return Math.squareroot(a)
        } else {
            this.throwDomainErr()

        }
    }
    ln(a) {
        if (a > 0) {
            return Math.log(a)
        } else {
            this.throwDomainErr()

        }
    }
}
module.exports = { CalculusFunction }