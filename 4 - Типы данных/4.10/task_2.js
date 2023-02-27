function topSalary(salaries) {
  let result;
  let value = 0;

  for (const [name, sal] of Object.entries(salaries)) {
    sal > value && (result = name) && (value = sal);
  }

  return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries))
