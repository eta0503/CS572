const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(json => {
      //console.log(json);
      res.render('index', { title: 'Exercise 5',users:json});
    });
  
});

module.exports = router;
