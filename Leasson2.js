var i=2
var sum = 0;
while(process.argv[i] != null){
	if(parseInt(process.argv[i])){
		sum += Number(process.argv[i]);
	}
	
	i++
}
console.log(sum);
