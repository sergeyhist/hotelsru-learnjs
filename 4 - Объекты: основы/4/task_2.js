let calculator = {
  read() {
    this.a = prompt('Input first value');
    this.b = prompt('Input second value');
  },
  sum() {
    return +this.a + +this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
