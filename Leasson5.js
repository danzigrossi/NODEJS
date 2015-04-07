var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var filter = process.argv[3];
var filterLength = process.argv[3].length;
fs.readdir(file, function (err, buffer) {
	if (err) throw err;

	for( i = 0 ; i < buffer.length ; i++){
		var arquivoAtual = buffer[i].toString('utf8');
		if(arquivoAtual.length < filterLength){ continue;}
	
		if(path.extname(arquivoAtual )== ('.'+filter)){
			console.log(buffer[i].toString('utf8'));
		}
	}
});
