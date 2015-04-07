var fs = require('fs')
var http = require('http');
var port = process.argv[2];
var file = process.argv[3];
var notFinish = 0;
var retorno = "";
var server = http.createServer(function(request, response) {
	
	response.writeHead(200, {"Content-Type": "text/html"});
	readFile(response);
	
});
server.listen(port);


function readFile(response){
	fs.readFile(file, function (err, buffer) {
		if (err) throw err;
		response.write(""+buffer);
	});	
}

