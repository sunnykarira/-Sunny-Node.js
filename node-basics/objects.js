/*var person = {};

person.firstName = 'Sunny ';
person.lastName = 'Karira ';
person.age = 19;

//passing person object
function greetUser(person){
	console.log('Hello ' + person.firstName + person.lastName);
}

greetUser(person);

//delete a value from object

delete person.age;

console.log(person);

//Adding an property in object
person['firstName'] = 'Sunny ';
person['lastName'] = 'Karira ';

// or

var firstNameProperty = 'firstName';
person['firstName'] = 'Sunny '; */

//Another method to put property attribute in object

/*var person = {
 	gender : 'Male',
 	eyecolor: 'Brown'
}*/

//challenge

var pet = {
	name: 'Peter',
	type: 'Dog'
};

function printPet(pet){
	console.log('You own a ' + pet.type + ' named ' + pet.name );
}

printPet(pet);