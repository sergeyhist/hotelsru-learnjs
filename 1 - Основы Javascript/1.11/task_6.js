const checkAge = (age) => {
  return age >= 14 && age <= 90 ? 'In range' : 'Out of range';
} 

console.log(checkAge(14));
console.log(checkAge(10));
console.log(checkAge(90));
console.log(checkAge(74));
