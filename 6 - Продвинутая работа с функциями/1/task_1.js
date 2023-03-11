function sumToFor(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

function sumToRec(n) {
  return n == 1 ? n : n + sumToRec(n - 1);
}

function sumToAr(n) {
  return (1 + n) / 2 * n;
}

console.log(sumToFor(100))
console.log(sumToRec(100))
console.log(sumToAr(100))
//console.log(sumTo(100000))
