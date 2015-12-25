/*var name = 'Sunny';

name = undefined;
// If we want to delete name value

console.log(name);

// Use of undefined in function

function doesNothing(){

}

console.log(doesNothing()); */

// undefined in function argument

/*function doesNothing(age){
	console.log(age);
}

doesNothing(); */

// Undefined in if statement
// This method is not fullproof
/*var name = undefined;

if(name === undefined){
	console.log(name);
}

// Fullproof method
var x;
if(typeof x === 'undefined'){
	console.log('x is undefined');
}*/

//Challenge

function greetUser(name){
	if(typeof name === 'undefined'){
		console.log('Hello World');
	}else{
		console.log('Hello ' + name);
	}

}

greetUser('Sunny');
greetUser(undefined);
greetUser();
var x;
greetUser(x);

