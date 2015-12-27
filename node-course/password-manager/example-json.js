//json object
/*var person = {
	name: 'Sunny',
	age: 19
}

// convert to json

var personJSON = JSON.stringify(person);

// Now personJSON contains string converted from person object

console.log(personJSON);
console.log(typeof personJSON); // strings


// Converting JSON to js object

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);
console.log(personObject.age); */


// challenge

var animal = '{"name": "Zuzu"}';

//convert to js object
// add age property
//convert it back into JSON

var animalObject = JSON.parse(animal);
animalObject.age = 4;

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);


