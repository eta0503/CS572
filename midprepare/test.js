// const EventEmitter = require('events');

// class Pick extends EventEmitter{
// 	constructor(){
// 		super();
// 	}

//  	pick(){
// 		this.emit('pick');
// 	}

// 	click(){
// 		this.emit('click');
// 	}

// }

// var pick = new Pick();
// pick.on('pick',()=>{
// 	console.log('Pick event is worked');
// });

// pick.on('click',()=>{
// 	console.log('Click event is worked');
// });

// pick.pick();
// pick.click();

const fs = require('fs');

const streamW = fs.createWriteStream('./my.txt');

const streamR = fs.readFile('./package.json',(err,file)=>{
	if(err) throw err;
	console.log(file);
});
// streamR.pipe;
