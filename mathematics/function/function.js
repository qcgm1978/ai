const nerdamer = require('nerdamer');
class Func {
    constructor() { }
    caclCubesSum(start, end) {
        const count = (end - start) / 2;
        let mean = 0
        if (count === Math.trunc(count)) {
            mean = (end + start) / 2
        }

        return end ? ((start + end) * Math.ceil(count) + mean) ** 2 : start ** 3
    }
    simplify(str) {
        const arr = str.replace(/\(|\)/g, '').split('/')
        const numerator = arr[0].split('+')
        return numerator.reduce((acc, item, index) => {
            const add = numerator[index + 1] ? ' + ' : ''
            return `${acc}${item}/${arr[1]}${add}`
        }, '')
    }
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