// 5. Программа спрашивает пользователя и переводит метры в километры

const readline = require("readline-sync");

console.log("Введите число метров");

const meters = readline.question();
const kilometers = meters / 1000;

console.log(`Это ${kilometers} километров`);
