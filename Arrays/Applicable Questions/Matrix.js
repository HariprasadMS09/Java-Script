let mat = [];
let r = parseInt(prompt("Enter row size"));
let c = parseInt(prompt("Enter column size"));

for (let i = 0; i < r; i++) {
    mat[i] = [];
    for (let j = 0; j < c; j++) {
        mat[i][j] = prompt(`Enter value for mat[${i}][${j}]`);
    }
}

for (let i = 0; i < r; i++) {
    let rowOutput = "";
    for (let j = 0; j < c; j++) {
        rowOutput += `${mat[i][j]}\t`;
    }
    console.log(rowOutput);
}
