class Base {
    constructor() { }
    getNumber(sol) {
        return (sol.toString().split(',').map(item => eval(item)))[0]
    }
}
// class Atmosphere {
//     constructor() { }
//     ρQuicksilver = 13.6
//     h = 76
//     getAtomsphere() {
//         const formula = 'p=ρ*g*h'
//         sol = nerdamer.solveEquations([formula, `ρ=${this.ρQuicksilver}`, `g=${math.gravity.value}`, `h=${this.h}`])
//     }
// }
class Earth extends Base {
    constructor() {
        super()
    }
    g = math.gravity.value
    solve() {
        const earthRadius = 6370.856e3
        var sol = nerdamer.solveEquations(`M * m * ${math.gravitationConstant.value}/ ${earthRadius ** 2}=m * ${math.gravity.value}`, 'M');
        return this.getNumber(sol);
    }

}