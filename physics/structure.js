class Parent {
    constructor(num) {
        this.num = num
    }
    isChild = false
    // the self-assembled structure must have a higher order than the isolated components,
    hasOrder = true
}
Parent.interact = 5
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
            const freeEnergy = Parent.interact
            for (let i = 0; i < freeEnergy; i++) {

                this.interact()
            }
        }
    }
    interactCount = 0
    interact() {
        if (Another.freeEnergy) {
            this.interactCount++
            Another.freeEnergy--
        }
    }
}
Another.freeEnergy = 10
module.exports = { Parent, Child, Another }