let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user);
const userAlt = JSON.parse(json);

console.log(json + '\n' + userAlt.name)
