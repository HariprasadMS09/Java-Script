let cgpa = prompt("Enter your cgpa btw 1-10");
let grade;
if(cgpa >= 7 && cgpa <= 10){
    grade = 'A';
}
else if(cgpa >= 5 && cgpa < 7){
    grade = 'B';
}
else if(cgpa >= 3.5 && cgpa < 5){
    grade = 'C';
}
else{
    grade = 'F';
}
console.log("Grade : ",grade)