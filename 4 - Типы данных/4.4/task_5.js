function getMaxSubSum(arr) {
  let initial = 0;
  let result = 0;
  let vault = arr[0];

  arr.reduce((a, b) => {
    if (b < 0) {
      if (b + a === 1)  {
        result = !result ? a + b : result + b;
      } else {
        b > result ? vault < b && (vault = b) : vault < result && (vault = result);
        result = 0;
      };
      return result
    } else {
      if (b - a === 1)  {
        result = !result ? a + b : result + b;
      } else {
        b > result ? vault < b && (vault = b) : vault < result && (vault = result);
        result = 0;
      };
      return b;
    }
  }, initial);

  return vault > result ? vault : result;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
console.log(getMaxSubSum([-1, -2, -3]))
console.log(getMaxSubSum([-1, 2, 3, -9, -1, 2, 3, 4]))
