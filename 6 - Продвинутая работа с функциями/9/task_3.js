function debounce(f, ms) {
  cooldown = false;

  return function(...args) {
    if (cooldown) return;
    f.apply(this, args)
    cooldown = true;
    setTimeout(() => cooldown = false, ms);
  };
}

let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
