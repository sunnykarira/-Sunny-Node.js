/*var argv = require('yargs')
	.command('hello', 'Greets the user', function(yargs){
		yargs.options({
			name:{
				demand: true,	  // this means name is required
				alias: 'n',       // shortcut to --name
				description: 'Your first name', // if we want to descibe
				type:'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
// .command.argv is called chaining
//command takes 3 arguments
// command, command description, options
//options take 1 argument which is an object
// then we have an object of name in which demand is set to true
// which means that name should be provided in the 
// command line.

//node validate-args.js hello --name Sunny
//node validate-args.js hello --n Sunny

// .help('help') shows the command options in the 
// command line
//node validate-args.js --help
//node validate-args.js hello  --help

var command = argv._[0];

if( command === 'hello' && typeof argv.name !== 'undefined'){
	console.log('Hello ' + argv.name);
}else{
	console.log('Hello World! ');
} */

//challenge

var argv = require('yargs')
	.command('hello','Greets the user ', function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'Your first name.',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name.',
				type: 'string'
			}
		}).help('help')
	})
	.help('help')
	.argv;

var command = argv._[0];

if(command === 'hello' && typeof argv.name !== 'undefined' 
	&& typeof argv.lastname !== 'undefined'){
	console.log('Hello '+ argv.name + ' ' + argv.lastname);
}