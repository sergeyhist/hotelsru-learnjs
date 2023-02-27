function formatDate(date) {
  const now = new Date(Date.now());
  const diff = now - date;

  return diff < 1 * 1000
    ? "прямо сейчас"
    : diff < 5 * 60 * 1000
    ? `${diff / 1000} секунд назад`
    : diff < 1 * 60 * 60 * 1000
    ? `${diff / 60 / 1000} минут назад`
    : `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
      }:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }`;
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
