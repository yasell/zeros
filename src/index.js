module.exports = function getZerosCount(number) {
  // your implementation
  let a, b;
  let d = 0;
  a = Math.floor(Math.log(number)) / Math.floor(Math.log(5));
  for (let i = 1; i <= a; i++) {
    b = Math.pow(5, i);
    d = d + Math.floor(number / b);
  }

  return d;
}