var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var User = require('../models/subscribers.model');
var Quote = require('../models/quote.model');
var db = process.env.MOGODB_URI || 'mongodb://localhost/big_site';
mongoose.connect(db);

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', {title: 'Adam is Awesome'});
    res.send("If it is good enough for you, it is gold enough for me");
});
/*
router.post('/subscribe', function (req, res, next) {
    var newUser = new User();
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.email = req.body.email;
    newUser.newsletter = req.body.newsletter === "yes" ? true : false;

    newUser.save(function (err, user) {
        if (err) {
            res.send(err);
            return console.error(err.message);
        }
        console.log(user);
        res.json(user);


    });
});
*/

router.post('/add-quote', function (req, res, next) {
    var newQuote = new Quote();

    newQuote.quote = req.body.quote;
    newQuote.user = req.body.username;

    newQuote.save(function (err, quote) {
        if (err) {
            res.send(err);
            return console.error(quote);
        }
        console.log(quote);
        res.json(quote);
    })
});

router.get('/get-quotes', function (req, res, next) {
    Quote.find({},function (err, quotes) {
        if(err) return res.send(err);
        res.json(quotes)
    })
});

module.exports = router;
