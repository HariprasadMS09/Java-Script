function Add(num1,num2){
    return num1+num2;
}

let n1 = parseInt(prompt("Enter any number"));
let n2 = parseInt(prompt("Enter any number"));
let total = Add(n1,n2);
console.log(`Sum = ${total}`);