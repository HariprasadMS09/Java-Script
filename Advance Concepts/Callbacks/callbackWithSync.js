//callback for Synchronous code

function sum(a,b){
    console.log("Sum = ", a+b);
}

function calculator(a,b,callBack1){
    callBack1(a,b);
}

calculator(5,10,sum);