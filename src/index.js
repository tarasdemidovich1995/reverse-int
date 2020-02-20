module.exports = function reverse(n) {
    if (n < 0) n = -n;
    return +n.toString(10).split('').reverse().join('');
}
