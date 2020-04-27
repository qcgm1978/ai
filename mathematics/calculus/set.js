class CalculusSet {
    getSet(arr = []) {
        const set = new Set()
        arr.map(item => set.add(item))
        return set
    }
}
module.exports = { CalculusSet }