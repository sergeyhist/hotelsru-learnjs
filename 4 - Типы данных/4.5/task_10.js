function shuffle(arr) {
  return arr.sort(() => Math.random() * 10 - Math.random() * 10);
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
