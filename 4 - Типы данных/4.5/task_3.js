function filterRangeInPlace(arr, a, b) {
  for (let i in arr) {arr[i] < a || arr[i] > b && (arr[i] = '')};
  while (arr.includes('')) {arr.splice(arr.indexOf(''), 1)};

  return arr;
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4))
console.log(filterRangeInPlace([5, 3, 8, 1, 9, 1], 1, 8))
