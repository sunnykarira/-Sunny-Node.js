console.log('Starting password manager');
var storage = require('node-persist');
var argv = require('yargs')
	.command('create','Creates an account', function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				desciption: 'Name for the account',
				type:'string'
			},
			username:{
				demand: true,
				alias: 'u',
				desciption: 'Username for the account',
				type: 'string'
			},
			password:{
				demand: true,
				alias: 'p',
				desciption: 'Password for the account',
				type: 'string'
			}
		}).help('help')
	}).help('help')
	.command('get','Get the matched account details ', function(yargs){
		yargs.options({
			get:{
				name: true,
				alias: 'n',
				desciption: 'Your name for the details of account to be matched.',
				type: 'string'
			}
		}).help('help')
	}).help('help')
	.argv;
storage.initSync();




function createAccount(account){
	var accounts = storage.getItemSync('accounts');

	if(typeof accounts === 'undefined'){
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	//return account;
}

function getAccount(accountName){
	var accounts = storage.getItemSync('accounts');
	var matchedAccount, i;

	for(i = 0; i < accounts.length; i++){
		if(accounts[i].name === accountName){
			matchedAccount = accounts[i];
		}	
	}	

	return matchedAccount;
}

var command = argv._[0];

if(command === 'create'){
	createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	});
	console.log('Account Created!');
}else if(command === 'get'){
	var fetchedAccount = getAccount(argv.n);
	//console.log(argv.n);
	if(fetchedAccount === 'undefined'){
		console.log('Account not found');
	}else{
	console.log(fetchedAccount);
	}
}  