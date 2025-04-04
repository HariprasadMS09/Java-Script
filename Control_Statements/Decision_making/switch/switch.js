let wdn = prompt("Enter weekday number (0-6)");
let day;
wdn = parseInt(wdn);
switch(wdn) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Invalid input");
        day = null; // Set day to null to indicate invalid input
        break;
}
if (day) {
    console.log("Day: ", day);
}
