module.exports = function reverse (n) {
  let sameN = n.toString().split("").reverse().join("");
    return parseInt(sameN);
}
