function suminput() {
  let arr = [];
  let result = 0;
  let ans;

  do {
    ans = prompt('Input number');
    !isNaN(ans) && arr.push(ans)
  } while (!isNaN(ans) && ans);

  arr.forEach(n => result += +n);

  return result;
}

alert(suminput());
