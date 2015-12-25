var age = 19;
var results;

results = age + 6;
console.log('age + 6 = ' + results);

results = age - 1;

console.log('age - 1 = ' + results);

results = age * 3;

console.log('age * 3 = ' + results);

results = age / 6;

console.log('age / 6 = ' + results);

results = age % 5;

console.log('age % 5 = ' + results);

results = results + 1;
results += 1;
results++;

results = results - 1;
results -= 1;
results--;

console.log('results is' + results);

var num = 19;
//console.log(++num);
/* 20 prints out */

console.log(num++);
/* 19 prints out */

//challenge
var num1 = 10;
var num2 = 20;
var num3 = 30;

var avg = (num1 + num2 + num3) / 3;

console.log('average is ' + avg);
