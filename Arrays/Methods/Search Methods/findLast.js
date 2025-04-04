const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(`temp = ${temp}`);

let i = parseFloat(prompt("I want the temperature which was over...")); // Convert input to a number
let high = temp.findLast(x => x > i); // Find the last temperature over 'i'

if (high !== undefined) {
    console.log(`The last temperature over ${i} was = ${high}`);
} else {
    console.log(`There is no temperature over ${i}.`);
}
