const changeMiddle = (arr, newValue) => {
  arr[Math.round(arr.length / 2 - 1)] = newValue;
}

let arr = ['Джаз', 'Блюз'];

console.log(arr)
arr.push('Рок-н-ролл');
console.log(arr)
changeMiddle(arr, 'Классика');
console.log(arr)
console.log(arr.splice(0, 1));
console.log(arr)
arr.splice(0, 0, 'Рэп', 'Регги');
console.log(arr)
