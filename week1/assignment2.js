
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

// 1. Sometimes setTimeout will be slow because it will check the timer at least once before executing. Otherwise, setImmediate can be executed without timer of event loop when I/O event is already called.

// 2. process.nextTick is not part of event loop and it runs before any additional I/O events or timers fire in subsequent ticks of the event loop. And SetImmediate is part of event loop which is embedded in check phase of event loop. It will be processed after I/O event's callback.
//

// 3. setTimeout, clearTimeout, setImmediate, setInterval, clearInterval,require, process, module,global, buffer

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

