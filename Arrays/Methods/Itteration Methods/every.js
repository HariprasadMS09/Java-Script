const numbers = [45, 4, 9, 16, 25];
let n = prompt("Enter a number");
// let allOver = numbers.every(myFunction);
let allOver = numbers.every(value => value > n);

console.log(allOver);


// function myFunction(value) {
//   return value > n;
// }