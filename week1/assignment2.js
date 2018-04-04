
Array.prototype.even  = function(){
	var evens=[];
	for(let value of this)
	{
		if(value%2==0) evens.push(value);
	}
	return evens;
}

Array.prototype.odd  = function(){
	var odds=[];
	for(let value of this)
	{
		if(value%2==1) odds.push(value);

	}
	return odds;
}

console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());

// function asyncReal(data,callback){
// 	process.nextTick(function(){ callback(data==='foo');});
// }
// console.log('done');

function slow(callback){
	// process.nextTick(function(){
		for(let i=0;i<=5e8;i++){}
		if(Math.random() >0.5){
			return callback("Error",null)
		}
		callback(null,{id:12345})	
	// });
}

function exec(fn){

	setImmediate(function() {
		fn(function(a,b){
			if(a)  this._fail(a);
			else this._done(b);
		});
		console.log("NONEBLOCK1");
	});
	
	this.done = function(fn1)
	{
		this._done = fn1;
		return this;
	}
	this.fail = function(fn2)
	{
		this._fail = fn2;
		return this;
	}

	return this;	
	
};


exec(slow).done(function(data){ console.log(data);})
		  .fail(function(err){console.log("Error: "+err);});

