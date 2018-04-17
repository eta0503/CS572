const express = require('express');
const path = require('path');
const cons = require('consolidate');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const tasksRouter = require('./routes/tasks');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
	app.db = client.db('todo');
});

app.use('/tasks',tasksRouter);


app.use(function(err,err,req,next){
	if(err) throw err;
	res.status(err.status||500);
	res.render('error',
		{
			message:error.message,error:{}
		}
	);
});



app.listen(3000,function(){
	console.log('Server started');
	console.log('global variables:', global);
	});
