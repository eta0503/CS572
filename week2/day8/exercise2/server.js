//server.js
const app = require('./app');
var port = process.env.PORT||3000;

const server = app.listen(port,function(){
	console.log('Server is listening on port:'+port);
});