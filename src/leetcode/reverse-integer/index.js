/**
 * @param {number} x
 * @return {number}
 */
const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);

var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let result = 0;
    while (!!x) {
        result = 10 * result + (x % 10);
        x = Math.floor(x/10);
        if (result > MAX || result < MIN) return 0;
    } 
    return sign * result;
};