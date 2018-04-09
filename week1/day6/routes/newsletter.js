var express = require('express');
var fs = require('fs');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'home' });
  });

router.get('/newsletter', function(req, res, next) {
  res.render('newsletter', { title: 'newsletter' });
});

router.post('/newsletter', function(req,res,next){
    req.assert('email','A valid email is required').notEmpty().isEmail();
    var errors = req.validationErrors();

    const email = req.body.email;
    console.log(errors);

    if(errors) res.render('error',{errors:errors});
    else {
        const email = req.body.email;
        fs.stat('subscribers.txt', (err, stat) => {
            if(err === null) {
                fs.appendFile('subscribers.txt', `,${email}`, (err) => {
                    if(err) return console.log(err);
                })
            } else if(err.code === 'ENOENT') {
                fs.writeFile('subscribers.txt', email, (err) => {
                    if(err) return console.log(err);
                });
            } else {
                console.log(err);
            }
        });
        res.redirect('/thankyou?email='+email);
    }
    
});

router.get('/thankyou', function(req, res, next) {
    const queryString = url.parse(req.url, true);
    res.render('thankyou', { email:  queryString.query.email});
  });

module.exports = router;
