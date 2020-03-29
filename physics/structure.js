// that can drive self-assembly is entropy maximization
class Entropy {
    entropyMaximization = true
}
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
class Another extends Entropy {
    constructor(interactClass) {
        super()
        if (interactClass.interact && this.isFieldDirected) {
            const freeEnergy = interactClass.interact
            //Avoiding one-at-a-time approaches
            for (let i = 0; i < freeEnergy; i++) {

                this.interact()
                this.strongBound()
                if (this.entropyMaximization) {

                    NanoStructure.isExist = true
                }
            }
        } else {// reversible organization of molecular units into ordered structures
            Another.freeEnergy = this.freeEnergy
        }
    }
    freeEnergy = 10
    interactCount = 0
    //  field-directed assembly
    isFieldDirected = true
    isStrongState = false
    interact() {
        if (Another.freeEnergy) {
            this.interactCount++
            Another.freeEnergy--
        }
    }
    // this organization may be transferred into strongly-bound covalent systems
    strongBound() {
        this.isStrongState = true
    }
}
Another.freeEnergy = 10
// Self-assembled nano-structure
class NanoStructure {
    constructor() {
        if (NanoStructure.isExist) {
            this.isMacroscopicSize = true
        }
    }
}
NanoStructure.isExist = false

module.exports = { Parent, Child, Another, NanoStructure }