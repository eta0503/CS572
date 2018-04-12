//app.js
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mongoskin').db('mongodb://localhost:27017/');
const collection = db.task;
const path = require('path');

var tasks = require('./routes/tasks');
var location = require('./routes/location');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/tasks',tasks);
app.use('/location',location)

app.use(function(err,req,res,next){
	res.status(err.status||500);
	res.render('error',{
		message:err.message,
		error:{}
	});
});

module.exports = app;


