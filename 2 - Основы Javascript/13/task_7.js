function primeNumbers(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    let j = 2;
    while(j <= Math.sqrt(i)) {
      i % j == 0 && (isPrime = false);
      j++;
    };
    isPrime && console.log(i);
  }
}

primeNumbers(10);
primeNumbers(1);
primeNumbers(93);
