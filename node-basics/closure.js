// Clousure is a function created inside 
//another function

/*function greetMaker(name){
	function greet(){
		console.log('Hello ' + name);
	}

	return greet;
}

var greetSunny = greetMaker('Sunny');
greetSunny();

var greetWorld = greetMaker('World');
greetWorld();*/

//challenge
function createAdder(baseNumber){
	return function (numberToAdd){
		return baseNumber + numberToAdd;
	}
	
}

var addTen = createAdder(10);
console.log(addTen(2));