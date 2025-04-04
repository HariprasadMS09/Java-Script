const points = [40, 100, 1, 5, 25, 10];
console.log(points);
function myFunction(){
    points.sort(function(){return 0.5 - Math.random()});
    console.log(points);
}