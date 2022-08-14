// Программа спрашивает пользователя и переводит мегабайты в гигабайты

const readline = require("readline-sync");

console.log("Введите число мегабайтов");

const mbs = readline.question();
const gbs = mbs / 1024;

console.log(`Это ${gbs} гигабайтов`);
