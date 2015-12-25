//single line of comment 
/* Multi line of
comment */

var accounts = [];

// Account Object
// balance
// Username

// creatAccount()
// push onto accounts array
// return account

function createAccount(account){
	accounts.push(account);
	return account;
}

// getAccount(Username)
// find matching account using forEach
// if not found return undefined
function getAccount(username){

	var matchedAccount;
	accounts.forEach(function(account){
		if(account.username === username){
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

function deposit(account, money){
	account.balance += money;
}

function withdraw(account, money){
	account.balance -= money;

}

function getBalance(account){

	return account.balance;
}


var sunnysAccount = createAccount({
	username: 'Sunny',
	balance: 0
});

deposit(sunnysAccount, 100);
console.log(getBalance(sunnysAccount));

withdraw(sunnysAccount, 11);
console.log(getBalance(sunnysAccount));

var existingAccount = getAccount('Sunny');
console.log(existingAccount.balance);


var JenAccount = createAccount({
		username: 'jen001',
		balance: 12
});

console.log(accounts);

existingAccount = getAccount('jen001');
console.log(existingAccount.balance);