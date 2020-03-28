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
//  local interactions among the components themselves
class Another {
    constructor() {
        if (typeof Parent !== 'undefined') {
            this.interact()
        }
    }
    interact() {
        this.isChild = Parent.Child
    }
}
module.exports = { Parent, Child, Another }