let phno = [];
let sum = 0;
for(let i=0;i<=9;i++){
    console.log(`Enter ${i+1}th digit of your phone number`);
    let n;
    n = prompt();
    phno.push(Number(n));
    sum += phno[i];
}
console.log("Sum of given ph_no is = ",sum);