function getDateAgo(date, days) {
  const result = new Date(+date - days * 24 * 60 * 60 * 1000);
  return (
    result.getDate() +
    " " +
    new Intl.DateTimeFormat("en-US", { month: "long" }).format(result) +
    " " +
    result.getFullYear()
  );
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
