const inBetween = (a, b) => {
  return function(res) {
    return a <= res && b >= res;
  }
}

const inArray = (arr) => {
  return function(num) {
    return arr.includes(num);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
