// Write a program that asks the user for their name and greets them with their name.

const readline = require("readline-sync");

console.log("Как тебя зовут?");

const name = readline.question();

console.log(`Привет, ${name}!`);
