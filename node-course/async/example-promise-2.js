// var Promise = require('promise');

// // Greatest feature of promise is we can chain multiple promises

// function dowork(shouldFail){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
			
// 			if(shouldFail === true && typeof shouldFail === 'boolean'){
// 				reject('Error Message');
// 			}else{
// 				resolve('Success');
// 			}
// 		}, 2000);
// 	});
// }

// // dowork().then(function(data){
// // 	console.log(data);
// // 	return dowork();
// // }, function(error){
// // 	console.log('Error');
// // }).then(function(data){
// // 	console.log(data);
// // 	console.log('All done!');
// // }, function (error){
// // 	console.log('Error');
// // }); 


// dowork().then(function(message){
// 	console.log(message);
// 	return dowork(true);
// }).then(function(message){
// 	console.log(message);
// 	console.log('All done!');
// }).catch(function(error){
// 	console.log(error);
// });


// // .catch() takes an anonymous function with error and if any 
// // of the promises fail error fucntion get called.

// Challenge
console.log('Challenge');

var request = require('request');
var url = 'http://ipinfo.io';
var Promise = require('promise');

function getLocation(){
	// return promise
		// resolve('Philedelphia');

		return new Promise(function(resolve, reject){
			request({
				url: url,
				json: true
			}, function(error, response, body){

				if(error){
					reject('Location not found');
				}else{
					resolve(body);
				}

			})
		});

}

function getWeather(location){
	// return promise
		// resolve ('Its 78 in location');
		return new Promise (function(resolve, reject){
			var encodedLocation = encodeURIComponent(location);
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

			if(!location){
				reject('Location not provided');
			}

			request({
				url: url,
				json: true
			}, function(error, response, body){
				if(error){
					reject('Cannot find weather!');
				}else{
					resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
				}
			});
		});

}

getLocation().then(function(data){
	return getWeather(data.city);
}).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});