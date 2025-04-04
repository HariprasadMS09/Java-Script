function checkAge(){
    let age = prompt("Are you above 18?, Type yes or no");
}
console.log("Welcome to Synchrnous coding");
setTimeout(checkAge,5000);
console.log("You can continue surfing");


/*
//instead of all this.....
function checkAge(){
    let age = prompt("Are you above 18?, Type yes or no");
}
setTimeout(checkAge,5000);

//we can directly write

setTimeout(() => {
    let age = prompt("Are you above 18?, Type yes or no");
},5000);
*/