// using ReadFile for show picture
var http = require('http');
var fs = require('fs');
var server = http.createServer();


server.on('request',function(req,res){

	const src = fs.readFileSync('./avengers.jpg');
	console.log(src);
	res.writeHead(200,{'Content-Type':'image/jpeg'});
	res.write(src);
	res.end();
});

server.listen(4000);