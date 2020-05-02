const nerdamer = require('nerdamer');
require('nerdamer/Solve.js')
class Func {
    constructor() { }
    getRange(expression) {
        const [numerator, denominator] = expression.split('/')
        if (numerator.includes('x') && denominator.includes('x')) {
            const coefNumerator = numerator.match(/(\w+)x/)[1]
            const coefDenominator = denominator.match(/(\w+)x/)[1]
            return `x!=${coefNumerator}/${coefDenominator}`
        }
    }
    isExplicitFunction(str) {
        return /y=/.test(str)
    }
    translateFunc(str, left, top) {
        if (this.isExplicitFunction(str)) {

            const replace = str.replace(/(=.*)x/, (`$1(x+${left})+${top}`))
            const arr = replace.split('=')
            const right = arr[1]
            arr[1] = nerdamer(`simplify(${right})`).toString().replace('*', '')
            return arr.join('=')
        } else {
            let xReplace = ''
            if (/x/.test(str)) {

                xReplace = str.replace(/x/, `(x-${left})`)
            } else {
                const x = +str.match(/(\d+),/)[1]
                xReplace = str.replace(/(\d+)\,/, x + left + ',')

            }
            if (/y/.test(str)) {

                xReplace = xReplace.replace(/y/, `(y-${top})`)
            } else {
                const reg = str.match(/,(\d+)/)
                if (reg) {

                    const y = +reg[1]
                    xReplace = xReplace.replace(/,(\d+)/, ',' + (y + top))
                }

            }
            // const arr = replace.split('=')
            // const simplify = arr.map(item => {
            //     return nerdamer(`simplify(${item})`).toString().replace('*', '').replace('--', '+')
            // })
            return xReplace.replace('--', '+')
        }
    }
    convertMathLang({ symmetryAxis, left = '1+x' }) {
        const match = left.match(/\d+/);

        const num = match ? +match[0] : 0
        const right = this.getVal({ mean: symmetryAxis, x: num })
        const sign = left.includes('-x') ? '+' : '-'
        return `f(${left})=f(${right}${sign}x)`
    }
    getVal({ mean, x }) {
        var sol = nerdamer.solveEquations([`(x+y)/2=${mean}`, `x=${x}`]);
        return sol[1][1];
    }
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