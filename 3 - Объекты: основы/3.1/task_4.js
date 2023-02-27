let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSals(sals) {
  let result = 0;

  Object.keys(sals).forEach(key => result += sals[key]);

  return result;
}

console.log(getSals(salaries));
