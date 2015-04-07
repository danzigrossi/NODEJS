const BufferList = require('bl');
var http = require('http');
var result = [];
var requisicaoOk = 0;
for( i = 2 ; i < 5; i++){
	callHttp(i);
}
function callback(response){
	response.pipe(BufferList(function(err, data){
				console.log(data.toString('utf8'));
				i++;
				if(i<1)http.get(process.argv[i],callback);
			}
		)
	)
}
function callHttp(indice){
	http.get(process.argv[indice],function (response){
		response.pipe(BufferList(function(err, data){
		
					result[(indice-2)] = data.toString('utf8');
					requisicaoOk++;
					printResults();
				}
			)
		)
	});
}
function printResults(){
	if(requisicaoOk < 3) return;
	for( i = 0 ; i < 3; i++){
		console.log(result[i]);
	}
}
