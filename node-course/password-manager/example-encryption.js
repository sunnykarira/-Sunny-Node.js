//npm install crypto-js@3.1.5 --save

/*var crypto = require('crypto-js');

var secretMessage = 'I hid the chips under the couch';
var secretKey = '123abc';


//Encrypt
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
// AES is the cryptography algorithm.

console.log('Encrypted Message: ' + encryptedMessage);


// Decrypt

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
// comes back is array of bytes.

// now converting in english
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log('Decrypted Message ' + decryptedMessage); */

//challenge

//Convert obect into secret message and the encrypt and
//decrypt

/* Now encrypt only takes a string so we need to convert
it into JSON*/

var crypto = require('crypto-js');
var secretMessage = {
	name: 'Sunny',
	secretName: '007'
};

var secretKey = '123abc';

var secretMessageJSON = JSON.stringify(secretMessage);

//console.log(secretMessageJSON);

var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);

console.log(encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);

var decryptedMessageJSON = bytes.toString(crypto.enc.Utf8);

console.log(JSON.parse(decryptedMessageJSON));

