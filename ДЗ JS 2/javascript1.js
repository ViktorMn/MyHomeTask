
var users = [];
//Юля, Макс, Карл, Виктор, Анна
for (var i = 0; i < 5; i++) {
    users.push(prompt('Введите имя')); // вводим имена пользоватей для переменной 'user'
}

var userName = prompt('Введите ваше имя');// вводим имя пользователя для переменной 'userName'

var error = false;
for (var j = 0; j < users.length; j++) {
    if (users[j] == userName) {
        error = false;
        break;
    } else {
        error = true;
    }
}
if (error == true) {
    alert('В доступе отказано');
} else {
    alert(userName + ', Добро пожаловать');
}