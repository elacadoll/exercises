// Modify the previous program such that only the users Alice and Bob are greeted with their names.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

const readline = require("readline-sync");

console.log("Как тебя зовут?");

const name = readline.question();

if (name === "Alice" || name === "Bob") {
  console.log(`Привет, ${name}!`);
} else {
  console.log("Привет, чувак!");
}
