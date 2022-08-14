// 2. Программа спрашивает имя пользователя и приветствует его

const readline = require("readline-sync");

console.log("Как тебя зовут?");

const name = readline.question();

console.log(`Привет, ${name}!`);
