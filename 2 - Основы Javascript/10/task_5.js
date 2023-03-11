let message;
let login = 'Директор';

console.log(
  login == 'Сотрудник'
    ? message = 'Привет'
    : login == 'Директор'
      ? message = 'Здравствуйте'
      : login == ''
        ? message = 'Нет логина'
        : message = ''
)
