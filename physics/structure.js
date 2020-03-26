class Parent {
    constructor(num) {
        this.num = num
    }
    isChild = false
    // the self-assembled structure must have a higher order than the isolated components,
    hasOrder = true
}
class Child extends Parent {
    constructor(num) {
        super(num)
    }
    isChild = true
    hasOrder = this.num ? this.hasOrder : false
}
module.exports = { Parent, Child }