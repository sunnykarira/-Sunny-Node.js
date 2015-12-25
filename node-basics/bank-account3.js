//single line of comment 
/* Multi line of
comment */

var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){

	var matchedAccount;

	//Conversion of for each to for or while loop
	/*accounts.forEach(function(account){
		if(account.username === username){
			matchedAccount = account;
		}
	});*/
	var i;

	for(i = 0; i < accounts.length ;i++){
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}

function deposit(account, money){
	//only accept number as amount argument

	if(typeof money === 'number'){
	account.balance += money;
	}else{
		console.log('Amount was not a number');
	}	
}

function withdraw(account, money){
	// only accept number as money argument
	if(typeof money === 'number'){
	account.balance -= money;
	}else{
		console.log('Amount was not a number');
	}

}

function getBalance(account){

	return account.balance;
}

// createBalanceGetter(account)
//return function()
// account.balance

function createBalanceGetter(account){
	return function(){
		return account.balance;
	}
}

var newAccount1 = createAccount({
	username: 'Sunny',
	balance: 100000
});

var newAccount2 = createAccount({
	username: 'yoyo',
	balance: 999
});

deposit(newAccount1, 100);
deposit(newAccount1, 'sbjhcg');

withdraw(newAccount2, 100);
withdraw(newAccount2, 'dhsdjh');

console.log(getBalance(newAccount1));

var balanceGetter = createBalanceGetter(newAccount1);
console.log(balanceGetter());