const checkAge = (age) => {
  return !(age >= 14 && age <= 90) ? 'Out of range' : 'In range';
} 
const checkAgeAlt = (age) => {
  return age < 14 || age > 90 ? 'Out of range' : 'In range';
} 

console.log(checkAge(14));
console.log(checkAge(10));
console.log(checkAge(90));
console.log(checkAge(74));

console.log(checkAgeAlt(14));
console.log(checkAgeAlt(10));
console.log(checkAgeAlt(90));
console.log(checkAgeAlt(74));
