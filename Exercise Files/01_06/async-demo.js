fs = require('fs');

function phoneNumber(err, data) {
	console.log('data:', data);
}

fs.readdir('/Users/jeremybwilson/Documents/Github/code/linkedin_learning/', phoneNumber);

console.log("this comes after");
