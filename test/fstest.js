const fs = require('fs');
const util = require('util');

util.log('dsfasdfasdfasdf', __dirname);

fs.readFile(__dirname + '/test.json', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    console.log("data>>", data);
});

return;

let data2 = fs.readFileSync('test.json', 'utf-8');