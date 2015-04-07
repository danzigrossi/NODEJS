var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket) {
	var date = new Date();
	var dataAtual = "" +date.getFullYear();
	dataAtual +=  "-" +needZero(date.getMonth()+1);
	dataAtual += "-" +needZero(date.getDate());
	dataAtual += " " +needZero(date.getHours());
	dataAtual += ":" +needZero(date.getMinutes());
	socket.end(dataAtual+"\n");
 })
 server.listen(port)

function needZero(number){
	 return (number < 10 ? '0' : '')+number;
}




