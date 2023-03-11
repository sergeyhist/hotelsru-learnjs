function Calculator() {
  this.operations = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => a - b
  },
  this.calculate = (str) => {
    let a = str.split(' ')[0];
    let b = str.split(' ')[2];

    return this.operations[str.split(' ')[1]](a, b);
  },
  this.addMethod = (name, func) => {
    this.operations[name] = func;
  }
}

let calc = new Calculator;

console.log(calc.calculate('3 + 7'))
console.log(calc.calculate('7 - 3'))

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate('3 * 7'))
console.log(calc.calculate('21 / 7'))
console.log(calc.calculate('3 ** 2'))
