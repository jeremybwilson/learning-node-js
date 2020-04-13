const fs = require('fs');

var data = {
    name: 'Alex'
}
// stringify the data variable created above
const stringifiedData = JSON.stringify(data);
fs.writeFile('data.json', stringifiedData, (err) => {
    console.log('write finished', err);
});
