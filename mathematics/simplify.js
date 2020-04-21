const { create, all } = require('mathjs')

// create a mathjs instance
const math = create(all)

// define new functions and variables
math.import({
    myvalue: 42,
    simplifyEnhanced: function (str) {
        return math.simplify(str)
    }
})
module.exports = math