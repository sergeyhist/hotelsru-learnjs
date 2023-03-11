function printListCycle(list) {
  console.log(list.value);

  while (list.next != null) {
    list = list.next;
    console.log(list.value);
  }
}

function printListRec(list) {
  console.log(list.value);
  list.next && printListRec(list.next);
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
