function printNumbers(from, to) {
  const interval = setInterval(() => {
    console.log(from);
    from++;
    from > to && clearInterval(interval);
  }, 1000);
}

function printNumbersAlt(from, to) {
  const interval = () => setTimeout(() => {
    console.log(from);
    from++
    from <= to && interval();
  }, 1000);

  interval();
}

printNumbers(1, 5)
printNumbersAlt(1, 2)
