var age = 24; //global variable

function localFunction(){
	//console.log(age);    //global variable can be accessed anywhere

	//var name = 'name';  //local variable
	var age = 0;
}

//console.log(age);
localFunction();
//console.log(name); // local variables can't be accessed outside
					//function


console.log(age);   // 24 will be printed