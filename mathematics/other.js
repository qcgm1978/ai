const getId = (checkCode) => {
    const start = 2112, end = 21, birthday = 19401013
    let arr = []
    for (let n = 0; n < 10; n++) {
        for (let m = 0; m < 10; m++) {

            const idc = `${start}${m}${n}${birthday}0${end}`
            if (getCheckCode(idc) === checkCode) {
                arr.push({ n, m, idc: `${idc}${checkCode}` })
            }
        }

    }
    return arr
}
const getCheckCode = id => {
    const checkCode = (12 - getSigma(id) % 11) % 11
    return checkCode
}
const getSigma = (arr) => {
    if (typeof arr !== 'array') {
        arr = String(arr).split('')
    }
    return arr.reverse().reduce((acc, item, index) => {
        return acc + +item * (Math.pow(2, (index + 1)) % 11)
    }, 0)

}
module.exports = { getId, getSigma, getCheckCode }