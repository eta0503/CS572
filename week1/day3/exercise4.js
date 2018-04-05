var zlib = require('zlib');
var fs = require('fs');

var src = './demofile.txt',
	zip = './demofile.txt.gz',
	dst = './output.txt';
var gzip = zlib.createGzip();
var r = fs.createReadStream(src);
var w = fs.createWriteStream(zip);
r.pipe(gzip).pipe(w);

w.on('close',function(){
	var gunzip = zlib.createGunzip();
	var r2 = fs.createReadStream(zip);
	var w2 = fs.createWriteStream(dst);
	r2.pipe(gunzip).pipe(w2);
})