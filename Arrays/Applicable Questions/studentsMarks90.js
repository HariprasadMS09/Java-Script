function findToppers(val){
    return val > 90;
}

Marks = [78,99,87,90,95,97];
let toppers = (Marks.filter(findToppers));
console.log(toppers);
