/*var i = 0;
var countLimit = 8;

//while loop
while (i < countLimit){
	console.log('while ' + i);
	i++;
}

// for loop

for(i = 0; i < countLimit; i++){
	console.log('for ' + i);
}*/

//challenge
//startingPoint > stoppingPoint

function countDown(startingPoint, stoppingPoint){
	var i;

	for(i = startingPoint; i >= stoppingPoint; i--){
		console.log('for ' + i);
	}

	i = startingPoint
	while (i >= stoppingPoint){
		console.log('while ' + i);
		i--;
	}

}

countDown(20, 10);