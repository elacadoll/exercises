// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

const readline = require("readline-sync");

console.log("Введите число");

const number = readline.question();

let sum = 0;

for (let i = 1; i <= number; i = i + 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + i;
    console.log(i);
  }
}

console.log(`Сумма чисел от 1 до ${number}, кратных 3 или 5, равна ${sum}!`);
