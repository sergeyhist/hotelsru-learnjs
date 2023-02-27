let date = new Date(Date.now());
let result = (24 * 60 * 60) - (date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds())

console.log(result);
console.log(result / 60 / 60);
