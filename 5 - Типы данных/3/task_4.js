function extractCurrencyValue(str) {
  return +str.slice(1, str.length);
}

console.log(extractCurrencyValue('$120'), extractCurrencyValue('$120') === 120)
