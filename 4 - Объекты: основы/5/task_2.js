function Calculator() {
  this.read = () => {
    this.a = prompt('Input first number');
    this.b = prompt('Input second number');
  },
  this.sum = () => {
    return +this.a + +this.b;
  },
  this.mul = () => {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
