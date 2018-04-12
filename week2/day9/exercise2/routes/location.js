//location.js
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';

router.get('/',function(req,res,next){
	res.render('location',{title:'location'});
});

router.post('/create',function(req,res,next){
	MongoClient.connect(dbUrl,function(err,client){
		if(err) throw err;
		const db = client.db('myDB');

		const location = 
		{
            name: req.body.name,
            category: 'map',
            long: req.body.longitude,
            lat: req.body.latitude
		};

		db.collection('location').insert(location,(err,docInserted)=>{
			if(err) throw err;

			console.log('Success'+JSON.stringify(docInserted));
			return client.close();

		});


	});


});

module.exports = router;