n = prompt("Enter n value");
let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);
let sum = arr.reduce((total, value) => total + value, 0);
let product = arr.reduce((total, value) => total * value, 1);
console.log(`Sum of given array = ${sum}`);
console.log(`Product of given array = ${product}`);