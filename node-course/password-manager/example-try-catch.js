//to throw a new error we can do
//throw new Error('Yoyo Honey Singh');


// So whenever a error is thrown in try block it 
// stops normal execution of the program
// and shifts to catch block
/*try {
	throw new Error('Unable to decrypt accounts');
} catch (e) {
	console.log('Something went wrong!');
	console.log(e.message);
} finally{
	console.log('Finally block executed!');
}

console.log('try catch ended'); */

// if no error is thrown in try 
// finally will always be executed

//challange

function doWork(){
	throw new Error('Unable to do work');
}

try{
	 doWork();
} catch (e){
	console.log('Something went wrong!');
	console.log(e.message);
}