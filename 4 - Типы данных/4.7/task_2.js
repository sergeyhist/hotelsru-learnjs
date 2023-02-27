function aclean(arr) {
  let map = new Map;

  arr.forEach(el => {map.set(el.toLowerCase().split('').sort().join(''), el)})

  return [...new Set(map.values())]
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
