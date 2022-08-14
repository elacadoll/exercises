// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

const readline = require("readline-sync");

console.log("Введите число");

const number = readline.question();

let sum = 0;

for (let i = 1; i <= number; i = i + 1) {
  sum = sum + i;
}

console.log(`Сумма чисел от 1 до ${number} равна ${sum}!`);
