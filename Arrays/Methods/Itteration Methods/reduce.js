const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((total, value) => total + value, 0); 
// let sum = numbers.reduce(myFunction);

console.log(sum);

// function myFunction(total, value) {
//   return total + value;
// }