let login = prompt('Your login:');
let password;

if (!login) {
  alert('Отменено')
} else if (login === 'Админ') {
  password = prompt('Your password:');
  (!password && alert('Отменено')) || (password && (password === 'Я главный' ? alert('Здравствуйте!') : alert('Неверный пароль')));
} else {
  alert('Я вас не знаю')
};
