const BufferList = require('bl');
var http = require('http');
http.get(process.argv[2],callback);

function callback(response){
	response.pipe(BufferList
		(function 
			(err, data) 
			{
				console.log(data.length);
				console.log(data.toString('utf8'));
			}
		)
	)
}
