var fs = require('fs');
var path = require('path');
module.exports = function (directory,filter,callBack) { 
	fs.readdir(directory, function (err, buffer) {
		if (err) return callBack(err);
		var array = [];
		for( i = 0 ; i < buffer.length ; i++){
			var arquivoAtual = buffer[i].toString('utf8');
		
			if(path.extname(arquivoAtual )== ('.'+filter)){
				array.push(buffer[i]);
			}
		}
		return callBack(undefined,array);
	});
	
}
