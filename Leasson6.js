var mymodule = require('./myModule6.js')
mymodule(process.argv[2],process.argv[3], function (err, data	){
		for( i = 0 ; i < data.length ; i++){
			console.log(data[i].toString('utf8'));
		}

	}
);
