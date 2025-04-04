function myArrayMax(arr) {  
    return Math.max.apply(null, arr);
}

const points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points));
