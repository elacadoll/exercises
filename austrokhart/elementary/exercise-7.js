// Пользователь вводит вопрос и программа случайным образом отвечает на него "Да" или "Нет"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const readline = require("readline-sync");

console.log("Введите свой вопрос и получите ответ");

// Спрашиваем и забываем...
readline.question();

let answer;

if (Math.random() < 0.5) {
  answer = "Да";
} else {
  answer = "Нет";
}

console.log(answer);
