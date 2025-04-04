const numbers = [45, 4, 9, 16, 25];
 let n = prompt("Enter a number");
// let someOver = numbers.some(myFunction);
let someOver = numbers.some(value => value > n);
console.log(someOver);
// function myFunction(value) {
//   return value > n;
// }