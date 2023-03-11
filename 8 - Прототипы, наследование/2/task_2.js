function Obj(text) {
  this.text = text;
}
Obj.prototype = {}

let obj = new Obj('kek');
let obj2 = new obj.constructor('kek');

console.log(obj.text, obj2.text);
