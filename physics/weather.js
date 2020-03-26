// The computer worked with 6-digit precision, but the printout rounded variables off to a 3-digit number, so a value like 0.506127 printed as 0.506. 
class Weather {
    constructor(num) {
        this.num = num
    }
    hasRain = false
    getNum() {
        return +(this.num).toFixed(3)
    }
    getLongTermPrediction() {
        return this.countDecimals(this.getNum(this.num)) <= 3 ? !this.hasRain : this.hasRain
    }
    countDecimals(value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }
}
module.exports = { Weather }