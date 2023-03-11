function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name );

function makeUserAlt() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let userAlt = makeUserAlt();

console.log( userAlt.ref().name );
