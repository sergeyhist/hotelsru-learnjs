const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function askPassword(ok, fail) {
  readline.question("Password?\n", pass => {
    if (pass == "rockstar") ok();
    else fail();
    readline.close();
  });
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
