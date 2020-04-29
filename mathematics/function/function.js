class Func {
    constructor() { }
    getWeightedMaxMin(a, b) {
        return {
            min: this.getArithMean(a, b)
        }
    }
    getArithMaxMin(a, b) {
        return {
            max: this.getWeightedMean(a, b),
            min: this.getGeoMean(a, b)
        }
    }
    getHarmMaxMin(a, b) {
        return {
            max: this.getGeoMean(a, b),
        }
    }
    getWeightedMean(a, b) {
        return Math.sqrt((a ** 2 + b ** 2) / 2)
    }
    getArithMean(a, b) {
        return (a + b) / 2
    }
    getGeoMean(a, b) {
        if (a > 0 && b > 0) {
            return Math.sqrt(a * b)
        }
    }
    getHarmMean(a, b) {
        return 2 / (1 / a + 1 / b)
    }

}

module.exports = { Func }