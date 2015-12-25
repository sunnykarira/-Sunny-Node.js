//single line of comment 
/* Multi line of
comment */

var account = {
	balance: 0
};

function deposit(account, money){
	account['balance'] += money;
}

function withdraw(account, money){
	account['balance'] -= money;

}

function getBalance(account){
	console.log('The account balance is ' + account.balance);
}

deposit(account, 50);
deposit(account, 100);
withdraw(account, 100);
getBalance(account);

