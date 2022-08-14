// Программа спрашивает любимое блюдо пользователя и случайным образом отвечает "{имя блюда}? Мне тоже это нравится" или "{имя блюда}? А вот я это не люблю"

const readline = require("readline-sync");

console.log("Введите название своего любимого блюда");

const favoriteDish = readline.question();

let answer;

if (Math.random() < 0.5) {
  answer = `${favoriteDish}? Мне тоже это нравится`;
} else {
  answer = `${favoriteDish}? А вот я это не люблю`;
}

console.log(answer);
