function Rabbit() {}

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};
// console.log(rabbit.eats);

// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);

delete Rabbit.prototype.eats;
console.log(rabbit.eats);
