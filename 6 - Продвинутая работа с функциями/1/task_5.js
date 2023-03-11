function printListCycle(list) {
  let result = [list.value];

  while (list.next != null) {
    list = list.next;
    result.push(list.value);
  }

  console.log(result.reverse().join('\n'));
}

function printListRec(list) {
  list.next && printListRec(list.next);
  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


printListCycle(list);
printListRec(list);
