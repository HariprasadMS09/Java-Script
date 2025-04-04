const Student = ["Janani","B.Tech",21,8.9];
delete Student[2];
console.log(Student[2]);//Using delete() leaves undefined holes in the array.Use pop() or shift() instead.