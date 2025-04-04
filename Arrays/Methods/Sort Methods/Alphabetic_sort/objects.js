const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

displayCars();

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  console.log(
    cars[0].type + " " + cars[0].year + "\n" +
    cars[1].type + " " + cars[1].year + "\n" +
    cars[2].type + " " + cars[2].year
  );
}