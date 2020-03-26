// The computer worked with 6-digit precision, but the printout rounded variables off to a 3-digit number, so a value like 0.506127 printed as 0.506. 
class Weather {
    constructor(num) {
        this.num = num
    }
    // deterministic laws that are highly sensitive to initial conditions
    ini = {

        // on any scale the proportion of noise-containing periods to error-free periods was a constant – thus errors were inevitable and must be planned for by incorporating redundancy
        UniversalBg: 3
    }
    hasRain = false
    //  rounding errors in numerical computation, can yield widely diverging outcomes for such dynamical systems
    getRoundErr(x) {
        return +x.toFixed(2)
    }
    getNum() {
        return +(this.num).toFixed(3)
    }
    getLongTermPrediction() {
        return this.countDecimals(this.getNum(this.num)) <= this.ini.UniversalBg ? !this.hasRain : this.hasRain
    }
    countDecimals(value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }
}
module.exports = { Weather }