// In js things have run one after the another
//console.log('1');
//console.log('2');

// In js there is set time out which lets you run some code 
// after some amount of time has passed.

// Like if a user has clicked a button in web app
// now if you want to show something after a second or so
// you can use setTimeout() // This is camel cased.

// setTimeout() take two argument which is a callback function
// and time in ms.

/*setTimeout(function(){
	console.log('1');
}, 2000);

console.log('2');*/

// In this 2 will print up and then 1 will wait for 2s and
// the prints 2.

// This means rest of the program will not stop.

/*setTimeout(function(){
	console.log('1');
}, 2000);

setTimeout(function(){
	console.log('3');
}, 1000);

console.log('2');*/

// 2 3 1 will print.


// Challenge
console.log('Challenge');

function printInTwoSeconds(message){
	setTimeout(function(){
		console.log(message);
	}, 2000);
}

printInTwoSeconds('Hi Async!');