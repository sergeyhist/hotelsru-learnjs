function filterRange(arr, a, b) {
  return arr.filter(el => el >= a && el <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4))
console.log(filterRange([5, 3, 8, 1, 9, 1], 1, 8))
