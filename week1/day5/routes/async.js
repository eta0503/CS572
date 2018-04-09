const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    
    const url = "http://jsonplaceholder.typicode.com/users/";
    const getUsers = async url =>{
        try{
            const response = await fetch(url);
            const usersJson = await response.json();
            res.render('async', { title: 'Exercise Async-Await way',users:usersJson});
        }
        catch (err)
        {
            console.log(err);
            res.render('async', { error: err.code});
        }
    };
    getUsers(url);
  
});

module.exports = router;
