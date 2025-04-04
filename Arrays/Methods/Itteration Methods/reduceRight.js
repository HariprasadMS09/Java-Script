const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);
let sum = numbers.reduceRight((total, value) => total + value, 0);

console.log(sum);

// function myFunction(total, value, index, array) {
//   return total + value;
// }