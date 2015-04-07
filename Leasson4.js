var fs = require('fs')
fs.readFile(process.argv[2], function (err, buffer) {
  if (err) throw err;
  console.log(buffer.toString('utf8').split('\n').length-1);
});
