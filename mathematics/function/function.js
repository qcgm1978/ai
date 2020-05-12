const nerdamer = require('nerdamer');
require('nerdamer/Solve.js')
const { CalculusSet } = require('../calculus/set')
class Func extends CalculusSet {
    constructor() {
        super()
    }
    pbs = 'b^2-4ac'
    getRootsPbs(equation, rootsNum) {// pbs: 根判别式
        const [a, b, c] = this.getCoef(equation)
        return nerdamer(this.pbs).evaluate().toString()
    }
    substituteEquation({ equation, val, funcVal, Comparison }) {
        // const left = this.getEqualsParts()[0]
        const substitution = equation.includes('=') ? equation : `${equation}=${funcVal}`;

        const sol = this.solveEquations([substitution, `x=${val}`])
        return `x${Comparison}${+sol.toFixed(2)}`
    }
    formatEquation(equation) {
        const regs = [/(\d)(x)/g, /(\w)(x)/g, /(\d)(\w)/g]
        const mul = regs.reduce((acc, item) => acc.replace(item, '$1*$2'), equation)
        return mul
    }
    getEquivalentEquation(str) {
        const mul = this.formatEquation(str)
        const arr = this.getEqualsParts(mul)
        const items = arr[0].match(/[+-]?[^+-]+/g)
        const quadraticCoef = items[0].match(/([1-9a-zA-Z]+)\*?x/)[1]
        const division = items.slice(1).map(item => {
            return nerdamer.simplify(`${item}/${quadraticCoef}`).toString()
        });

        const join = division.join('+');
        return `x^2${join.replace('*', '')}=0`
    }
    getEqualsParts(equation) {
        const arr = equation.split('=')
        return arr
    }
    getDerivateMax(derivate, range, extremum) {
        const c = this.getNumberLine(derivate, extremum);
        const expression = this.evaluate(derivate, { c })
        const values = range.map(item => +this.evaluate(expression, item))
        return Math.max(...values)
    }
    evaluate(str, value) {
        const config = value instanceof Object ? value : { x: value };

        const expression = nerdamer(str).evaluate(config).toString();
        return expression
    }
    getRoots(str, obj) {
        const expression = nerdamer(str).evaluate(obj).toString();
        return eval(nerdamer.solve(expression, 'x').toString())
    }
    getNumberLine(derivate, variable) {
        return this.solveEquations({ equations: [`${derivate}=0`, `x=${variable}`], variable: 'c' })
    }
    getDifferentiate(str) {
        const right = this.getEqualsRight(str)
        var y = nerdamer.diff(right, 'x')
        return (y.toString());
    }
    getOddFuncCoef(str, isOdd = true) {
        const right = this.getEqualsRight(str)
        const coefs = right.match(/([-.1-9a-zA-Z]*)\)?\*?x(\^(\d+))?/g).map(item => item.split('x'))
        const format = coefs.map(item => {
            return item.map(it => {
                let str = it.replace(/\)|\^|\*/g, '')
                if (str === '') {
                    str = '1'
                }
                if (!isNaN(str)) {
                    str = +str
                }
                return str
            })
        })
        let arr = []
        if (isOdd) {
            arr = format.filter(item => !(item[1] % 2))
        }
        const oddPowerCoefs = arr.map(item => item[0]);
        // return coefs
        const coefSols = oddPowerCoefs.reduce((acc, item) => {
            const variable = item.match(/\w+/)[0]
            const sol = nerdamer.solve(item, variable)
            return { ...acc, [variable]: +sol.toString().slice(1, -1) }
        }, {});

        return coefSols
    }
    isMeanInequality(str, { a, b } = {}) {

        const enableNegtive = isNaN(str.split('=')[1])
        b = b || 1 / (a)
        const mulStr = nerdamer(`${a}*${b}`).evaluate().toString();

        const mul = mulStr.includes('/') ? eval(mulStr) : +mulStr

        const sameSign = mul > 0;
        const differ = `${a}-${b}`;

        const solveDiffer = nerdamer.solve(differ, 'x');
        const enablEqual = !!solveDiffer.symbol.elements.length
        return enableNegtive && sameSign && enablEqual
        return enablEqual
    }
    getConjugateRange(str, { a, b, isNegative = false } = {}) {
        const num = +this.calcMin(str, { a, b, isNegative }).toFixed(2)
        return isNegative ? [-Infinity, num] : [num, Infinity]
    }
    calcMin(str, { a, b, isNegative = false } = {}) {
        if (this.isMeanInequality(str, { a, b })) {
            const min = this.getGeoMean(a, b) * 2
            return isNegative ? -min : min
        }
    }
    solveInverseSymmetryPoint({ x, y, variable = 'm' }) {
        return +nerdamer.solve(`${x} = ${y}`, variable).toString().slice(1, -1)
        // return +nerdamer(`solve(${x} = ${y},${variable})`).toString().slice(1, -1)
    }
    inverseSolution(str, variable = 'sin(x)') {
        const solve = str.split(variable).join('x')
        const toStr = nerdamer(`solve(${solve}, x)`).toString();

        return (toStr).slice(1, -1);
    }
    changeVar(expression, variable) {
        return expression.split(variable).join('t')
    }

    getHyperbolaRange(expression, range, variable = 'x') {
        const sols = range.map(item => {
            const equation = /=/.test(expression) ? expression : `${variable}=${expression}`;
            let sol = 0
            try {

                sol = this.solveEquations({ equations: [equation, `${variable}=${item}`], variable: 'y' })
            } catch (e) {
                sol = +e.message.match(/(.+?)\s/)[1]
                // if (isNaN(sol)) {
                //     throw new Error(e)
                // }

            }
            return +sol.toFixed(2)
        })

        const special = this.getLimit(expression)
        if (isNaN(special)) {
            if (sols.includes(NaN)) {
                const otherVar = expression.replace(/x|y/g, '').match(/\w+/g)[0]
                return `determined by ${otherVar}`
            } else {

                return sols
            }
        } else {
            const allSpecial = [...new Set([...sols, special, Infinity, -Infinity])]
            const sort = allSpecial.sort((a, b) => a > b ? 1 : -1)

            const group = sort.reduce((acc, item, index) => {
                if (index % 2) {
                } else {
                    acc.push([])

                }
                acc[acc.length - 1].push(item)
                return acc
            }, [])
            return group.filter(item => item.length === 2)
        }
    }
    getLimit(str) {
        str = /=/.test(str) ? str.split('=')[1] : str
        var x = nerdamer(`limit(${str},t,${Infinity})`);
        return +(x.toString());
    }
    getSpecialPoint(str) {
        const sol = nerdamer.solveEquations([str, 'x=0']);

        const xy = sol.map(item => item[1]).join(',');

        return `(${xy})`
    }
    getDefineDomain(expression) {
        const [numerator, denominator] = expression.split('/')
        if (denominator.includes('x')) {
            const sol = nerdamer(`solve(${denominator}, x)`)
            return `x!=${eval(sol.toString())[0]}`
        }
    }
    getRange(expression) {
        const [numerator, denominator] = expression.split('/')
        if (numerator.includes('x') && denominator.includes('x')) {
            const coefNumerator = this.getCoef(numerator)
            const coefDenominator = this.getCoef(denominator)
            return `y!=${coefNumerator}/${coefDenominator}`
        }
    }
    getCoef(str, isAll = false) {
        const coef = str.match(/([1-9a-zA-Z]+)\*?x/);

        return isAll ? coef : (coef ? coef[1] : 1)
    }
    isExplicitFunction(str) {
        return /y=/.test(str)
    }
    getEqualsRight(equation) {
        const arr = equation.split('=')
        return arr[1]
    }

    translateFunc(str, left, top) {
        if (this.isExplicitFunction(str)) {

            const replace = str.replace(/(=.*)x/, (`$1(x+${left})+${top}`))
            const arr = replace.split('=')
            const right = this.getEqualsRight(replace)
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

        if (isNaN(a) || isNaN(b)) {
            const str = nerdamer(`sqrt(${a} * ${b})`).evaluate().toString();
            return str.includes('/') ? eval(str) : +str

        }
        if (a > 0 && b > 0) {
            return Math.sqrt(a * b)
        }
    }
    getHarmMean(a, b) {
        return 2 / (1 / a + 1 / b)
    }

}

module.exports = { Func }