console.log('Starting password manager ');
var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();

var argv = require('yargs')
	.command('create','Create a user account', function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'Your first name. ',
				type: 'string'
			},
			username:{
				demand: true,
				alias: 'u',
				description: 'Your user name. ',
				type: 'string'
			},
			password:{
				demand: true,
				alias: 'p',
				description: 'Your password for account. ',
				type: 'string'
			},
			masterpassword:{
				demand: true,
				alias: 'm',
				description: 'Your master password for account. ',
				type: 'string'
			}
		}).help('help');
	}).help('help')
	.command('get','Fetch the account details ',function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'Your first name. ',
				type: 'string'
			},
			masterpassword:{
				demand: true,
				alias: 'm',
				description: 'Your master password for account. ',
				type: 'string'
			}
		}).help('help');
	}).help('help')
	.argv;


var command = argv._[0];


function getAccounts(masterpassword){
	// use getItemSync to fetch accounts
	// decrypt
	// return accounts array

	var encryptedAccounts = storage.getItemSync('accounts');
	var accounts = [];

	if(typeof encryptedAccounts !== 'undefined'){
		var bytes = crypto.AES.decrypt(encryptedAccounts, masterpassword);
		var decryptedArrayJSON = bytes.toString(crypto.enc.Utf8);
		accounts = JSON.parse(decryptedArrayJSON);
	}

	return accounts;
}

function saveAccounts(accounts, masterpassword){
	//encrypt accounts
	// setItemSync
	// return accounts
	var accountsJSON = JSON.stringify(accounts);
	var encryptedAccounts = crypto.AES.encrypt(accountsJSON, masterpassword);
	storage.setItemSync('accounts', encryptedAccounts.toString());

}

function createAccount(account, masterpassword){
	
	var accounts = getAccounts(masterpassword);
	accounts.push(account);
	console.log('Account Created! ');
	saveAccounts(accounts, masterpassword);
}

function getAccount(accountName, masterpassword){
	//var accounts = getItemSync('accounts');
	var accounts = getAccounts(masterpassword);
	var matchedAccount, i;

	for(i = 0; i < accounts.length; i++){
		if(accounts[i].name === accountName){
			matchedAccount = accounts[i];
			console.log('Account found! ');
			break;
		}
	}

	if(matchedAccount === 'undefined'){
		console.log('Account not found ');
	}else{
		return matchedAccount;
	}
}

if(command === 'create'){
	createAccount({
		name: argv.n,
		username: argv.u,
		password: argv.p
	}, argv.m);
}else if(command === 'get'){
	var account = getAccount(argv.n, argv.m);
	console.log(account);
}

// But this program will fail at
// node app-3.js create -n Sunny -u xyz@gmail.com -p cbcb -m 123