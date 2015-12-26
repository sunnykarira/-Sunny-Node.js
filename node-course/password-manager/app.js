console.log('starting password manager');

//Including third party module using require node function
var storage = require('node-persist');
//get your computer ready for writing and saving variables
storage.initSync();

//---------------------------------Practice on node-persist-------------------------

/*//Saving variable to computer
//storage.setItemSync('name', 'Sunny');

//Getting saved variable from a computer
var name = storage.getItemSync('name');
console.log('Saved name is ' + name);  */


//Saving accounts object in the computer
/*storage.setItemSync('accounts',[{
	username:'Sunny',
	balance: 1000010
}]);*/

//var accounts = storage.getItemSync('accounts');
//console.log(accounts);

//Challenge
//push a new account
//save using setItemSync()

/*storage.setItemSync('accounts',[{
	username: 'Sunny',
	balance: 8392829383
}, {
	username: 'Sakshi',
	balance: 382983298
}]);*/

/*var accounts = storage.getItemSync('accounts');

accounts.push({
	username: 'yoyo',
	password: 72830983
});

storage.setItemSync('accounts',accounts);

console.log(accounts);*/


//------------------------------ Password Manager-----------------------------------

//account.name
//account.username
//account.password

function createAccount(account){
	var accounts = storage.getItemSync('accounts');

	//if accounts is undefined
	// set accounts = []

	if(typeof accounts === 'undefined'){
		accounts = [];
	}

	//push to push on new account

	accounts.push(account);

	storage.setItemSync('accounts', accounts);

	// return account
	return account;
}

function getAccount(accountName){

	var accounts = storage.getItemSync('accounts');

	if(typeof accounts === 'undefined'){
		console.log('Please enter an account');
	}else{

		var i,matchedAccount;
		for(i = 0; i < accounts.length; i++){
			account = accounts[i];
			if(account.name === accountName){
				matchedAccount = account;
			}
		}
	}
	//loop up an find account.Name that matches
	//return it
	return matchedAccount;
}

// createAccount({
// 	name: 'Facebook',
// 	username: 'Sunny@gmail.com',
// 	password: 'password123!'
// });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);