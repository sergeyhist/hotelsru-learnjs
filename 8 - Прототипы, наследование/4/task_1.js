let dictionary = Object.create(null)

Object.defineProperty(dictionary, "toString", {
  value: function() {
    return Object.keys(this).join();
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary.toString());
