function squareIt(val){
    console.log(`square root of  ${val} = ${val**2}`);
}

let arr = [4,3,4,34,43];
console.log(`arr = ${arr}`);
// arr.forEach((val)=>{
//     console.log(`square root of  ${val} = ${val**2}`);
// })
arr.forEach(squareIt)
