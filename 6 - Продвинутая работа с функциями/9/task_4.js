function throttle(f, ms) {
  cooldown = false;
  calls = [];

  return function(...args) {
    calls.push(args[0]);
    if (cooldown) return;
    f.apply(this, args)
    cooldown = true;
    setTimeout(() => {
      cooldown = false;
      console.log([...calls].pop());
    }, ms);
  };
}

function f(a) {
  console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1); f1000(2); f1000(3);
