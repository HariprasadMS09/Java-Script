const numbers = [45, 4, 9, 16, 25];
const i = prompt("Enter a number");
const inputNumber = Number(i);
// const val = numbers.filter(val => val > i);
// console.log(val);
const val = numbers.filter(myFun);
console.log(val);

function myFun(num){
    return num > inputNumber;
}
