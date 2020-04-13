const fs = require('fs');

const macCodeFilePath = '/Users/jeremybwilson/Documents/Github/code/linkedin_learning/learning-node/';

fs.readdir(macCodeFilePath, (err, data) => {
    console.log(data);
})
