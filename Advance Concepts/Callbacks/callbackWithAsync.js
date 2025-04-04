// callbacks for Asynchronous code
function sum(){
    console.log("Sum = ", 2+6);
}
setTimeout(sum,3000);// here sum is a callback function



/* we can also write it as...

setTimeout(() => {
    console.log("sum = " 2+6);
},3000);

*/