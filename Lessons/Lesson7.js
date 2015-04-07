var http = require('http');
http.get(process.argv[2],callback);

function callback(response){
	response.on("data", function (data) { console.log(data.toString('utf8'))});
	response.on("error", function (data) { console.log(data.toString('utf8'))});
	response.on("end", function (data) { console.log(data.toString('utf8'))});
}
