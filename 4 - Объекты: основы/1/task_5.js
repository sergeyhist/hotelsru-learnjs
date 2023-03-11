function multiplyNumeric(obj) {
  Object.keys(obj).forEach(key => !isNaN(obj[key]) && (obj[key] *= 2));
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));
