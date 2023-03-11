function isEmpty(obj) {
  return Object.keys(obj).length ? true : false;
}

console.log(isEmpty({}));
console.log(isEmpty({name: 'John'}));
