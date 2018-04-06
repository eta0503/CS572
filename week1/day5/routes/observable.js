const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    const url = "http://jsonplaceholder.typicode.com/users/";

    const myObs = Rx.Observable.fromPromise(fetch(url).then(response=> response.json()));
   
    myObs.subscribe(
        usersJson=> {
        res.render('observable', { title: 'Exercise Observable way',users:usersJson});
    }
    );  
});

module.exports = router;
