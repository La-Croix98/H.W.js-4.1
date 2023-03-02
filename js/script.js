"use strict"; 

// Задание 1

function userInfo (name, DateBirth, year) {
    return `${userName}, Ваш возраст ${currentYear - userDateBirth}`;
}

let userName = prompt("Введите ваше имя", ""),
    userDateBirth = +prompt("Введите год вашего рождения", ""),
    currentYear = +prompt("Введите нынешний год", "");

alert( userInfo(userName, userDateBirth, currentYear) );


