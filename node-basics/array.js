/*var grades = [100, 50];

grades.push(79);
console.log(grades);

//Adding items in the beginning
grades.unshift(79);

var grade = grades.pop();
console.log(grades);
console.log(grade); */
 
//Iteration over elements in array

/*var grades = [100, 50, 75];

//We can make anonymous function

//callback function : This function call back and 
//passes the argument
grades.forEach(function (grade) {
	console.log(grade);
});

// Pulling out item at specific index
console.log(grades[2]);

//Getting total no of elements in the array
console.log(grades.length);*/

//challenge
var grades = [100, 50,75];

var totalGrade = 0;

grades.forEach(function(grade){
	totalGrade += grade;
});

console.log(totalGrade / grades.length);