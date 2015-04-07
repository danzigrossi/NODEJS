var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2]);
//console.log(buffer);
var str = buffer.toString('utf8');

var jar = str.split('\n');
console.log(jar.length-1);
