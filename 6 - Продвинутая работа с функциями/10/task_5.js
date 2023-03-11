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
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
