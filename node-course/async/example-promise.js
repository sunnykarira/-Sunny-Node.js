// //var Promise = require("es6-promise").Promise
// var Promise = require('promise');
// // Callback 
// function doWork(data, callback){
// 	callback('done');
// }

// // Promise
// // It is something which returns promise either
// // pass (resolve) or fail (reject)

// function doWorkPromise(data){

// 	return new Promise(function(resolve, reject){
// 		// resolve - Pass
// 		// reject - Fail

// 		// if Resolved

// 		// setTimeout(function(){
// 		// 	resolve('Everything worked');
// 		// }, 2000);
// 		// //resolve('Everything worked');

// 		//Now making an error
// 		setTimeout(function(){
// 			reject('Everything is broken!');
// 		}, 2000);

// 		// reject({
// 		// 	error: 'something went wrong!'

// 		// });

// 		// We can pass anything in resolve or reject
// 		// but only one thing at a time is passed in a promise.
// 		// Reject or respnse can be called once.
// 	});
// }


// doWorkPromise('Some data').then(function(data){
// 	console.log(data);
// }, function(error){
// 	console.log(error);
// });


// Challenge

var Promise = require('promise');
var request = require('request');

function getWeather(location){

	return new Promise(function(resolve, reject){

		var encodedLocation = encodeURIComponent(location);
		var url ='http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

		if(!location){
			reject('Location not provided');
		}

		request({
			url: url,
			json: true
		}, function(error, response, body){

			if(error){
				reject('Unable to fetch weather');
			}else{
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}

getWeather('Australia').then(function(data){
	console.log(data);
}, function(error){
	console.log(error);
});