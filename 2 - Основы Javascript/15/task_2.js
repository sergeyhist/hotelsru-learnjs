function checkAge(age) {return age > 18 ? true : confirm('Родители разрешили?')}
function checkAgeAlt(age) {return age > 18 || confirm('Родители разрешили?')}

checkAge(17)
