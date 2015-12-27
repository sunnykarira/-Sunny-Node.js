/*var argv = require('yargs').argv;


//console.log(argv);

/*if(argv._[0] === 'hello'){
	console.log('Hello World!');
}*/

// node example-args.js hello 
//{ _: [ 'hello' ], '$0': 'example-args.js' }

// node example-args.js hello --name Sunny
//{ _: [ 'hello' ], name: 'Sunny', '$0': 'example-args.js' }


// if name is passed print hello 'username' else print
// Hello World
/*var command = argv._[0];

if(command === 'hello' && typeof argv.name !== 'undefined'){
	console.log('Hello ' + argv.name + '!');
}else if(command === 'hello'){
	console.log('Hello World!');
}

*/

//challenge
var argv = require('yargs').argv;

var command = argv._[0];

if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
	console.log('Hello ' + argv.name + ' ' + argv.lastname);
}else if(command === 'hello' && typeof argv.name !== 'undefined'){
	console.log('Hello ' + argv.name);	
}else{
	console.log('Hello World');
}