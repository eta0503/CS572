const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(json => {
      //console.log(json);
      res.render('promise', { title: 'Exercise Promise way',users:json});
    })
    .catch(err=> {
        console.error(err);
        res.render('promise', { error: err.code});
        });
  
});

module.exports = router;
