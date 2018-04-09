var express = require('express');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');
var router = express.Router();

var db;
/* GET home page. */

MongoClient.connect("mongodb://localhost:27017", function(err, database) {
  if(err) throw err;
  db = database.db('myDB');
  console.log("db connected");
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var algorithm = 'aes256';
var password = 'asaadsaad';

router.get('/secret', function(req, res, next) {

  db.collection("homework7").findOne({}, function(err, doc) {
      if(doc) {
        console.log(doc.message);
       var decmsg = decrypt(doc.message);
        res.render('secret', { title: 'Decryption message',message:decmsg });
      }
      else {
        res.end();
      }
  });
   
});
// decryption function with aes256
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = router;
