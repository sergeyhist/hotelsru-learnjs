function Accumulator(initial) {
  this.value = initial,
  this.read = () => {
    this.value += +prompt('Input number')
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
