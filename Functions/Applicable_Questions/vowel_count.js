// function Countvowel(str){
//     str.toLowerCase();
//     let count = 0;
//     for(let i of str){
//         if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
//             count += 1;
//         }
//     }
//     return count;
// }

// let txt = prompt("Enter a text");
// let count = Countvowel(txt);
// console.log(`There are ${count} vowel in the given text`);

const Countvowel = (str) => {
    str.toLowerCase();
    let count = 0;
    for(let i of str){
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
            count += 1;
        }
    }
    return count;
}

let txt = prompt("Enter a text");
let count = Countvowel(txt);
console.log(Countvowel);
console.log(`There are ${count} vowel in the given text`);