const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(i => {
//     console.log(i * 2);
// })

const number2 = numbers1.map(myFun);

function myFun(val){
    return val * 2;
}