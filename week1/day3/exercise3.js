'use strict'
var EventEmitter = require('events');
class Clock extends EventEmitter{
	constructor()
	{
		super();
	}

	print(data)
	{
		setInterval(function(me){
			me.emit('tick',data)
		},1000, this);
	}
}

var clock1 = new Clock();
clock1.on('tick', function(data){
	 console.log(data);
});

clock1.print('woohoo');
