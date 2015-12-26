console.log('starting password manager');

//Including third party module using require node function
var storage = require('node-persist');
//get your computer ready for writing and saving variables
storage.initSync();

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

var accounts = storage.getItemSync('accounts');

accounts.push({
	username: 'yoyo',
	password: 72830983
});

storage.setItemSync('accounts',accounts);

console.log(accounts);