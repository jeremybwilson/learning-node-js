fs = require('fs');

const macCodeFilePath = '/Users/jeremybwilson/Documents/Github/code/linkedin_learning/';

data = fs.readdirSync(macCodeFilePath);
console.log('data:', data);

console.log("this comes after");
