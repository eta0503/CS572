// using stream for show picture
var http = require('http');
var fs = require('fs');
var server = http.createServer();


server.on('request',function(req,res){

	const src = fs.createReadStream('./avengers.jpg');
	src.pipe(res);
});
server.listen(4001);