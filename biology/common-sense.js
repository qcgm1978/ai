class CommonSense {
    constructor() { }
    getUrl(location) {
        return ['protocol', 'hostname', 'pathname', 'search', 'hash'].reduce((acc, item, index) => acc + location[item] + (index ? '' : '//'), '')
    }
}
module.exports = { CommonSense }