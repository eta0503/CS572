var dns = require('dns');

dns.resolve4('www.mum.edu',function(err,addresses){
	if(err) throw err;

	console.log('address:'+JSON.stringify(addresses));

	addresses.forEach(function(a){
		dns.reverse(a, function(err,domain){
			if(err) {
				console.log('reverse for:'+a+ ' failed: ' + err.message);
			}
			else{
				console.log('reverse for:'+a+ ' done: '+JSON.stringify(domain));
			}	
		});
	});
});