fs = require('fs');

function phoneNumber(err, data) {
	console.log('data:', data);
}

const macCodeFilePath = '/Users/jeremybwilson/Documents/Github/code/linkedin_learning/';
fs.readdir(macCodeFilePath, phoneNumber);

console.log("this comes after");
