function camelize(str) {
  const arr = str.split('-')
  let result = [arr[0]];

  arr.splice(0, 1);
  arr.forEach((el) =>
    el && result.push(el[0].toUpperCase() + el.slice(1, el.length))
  );

  return result.join('');
}

console.log(camelize("background-color")) 
console.log(camelize("list-style-image")) 
console.log(camelize("-webkit-transition"))
