const numbers = [4, 9, 16, 25, 36];
console.log(`numbers = ${numbers}`);
let i = prompt("I want the number which is greater than...");
const index = numbers.findIndex(num => num > i);
console.log(`First number that is greater than ${i} is = ${numbers[index]} which is located at ${index}`);
