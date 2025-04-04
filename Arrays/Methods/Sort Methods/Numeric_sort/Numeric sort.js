const points = [40, 100, 1, 5, 25, 10];
console.log(points);  
points.sort(function(a, b){return a - b});
console.log(points);

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function: