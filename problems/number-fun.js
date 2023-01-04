function returnsThree() {
  return 3;
}

function reciprocal(n) {
  // Your code here
  // Take in n, return 1/n
  // Number outside 1 - 1000000 will throw TypeError
  if (n < 1 || n > 1000000) {
    throw new TypeError("Outside range of support");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
