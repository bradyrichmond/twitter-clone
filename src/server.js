'use strict'

//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Tweet = require('./model/tweets');
require('dotenv').config();

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

//db config
mongoose.connect(process.env.DATABASE_URI);

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent tweets
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!' });
});

//adding the /tweets route to our /api router
router.route('/tweets')
    //retrieve all tweets from the database
    .get(function (req, res) {
        //looks at our Tweet Schema
        Tweet.find(function (err, tweets) {
            if (err)
                res.send(err);
            //responds with a json object of our database tweets.
            res.json(tweets)
        });
    })
    //post new tweet to the database
    .post(function (req, res) {
        var tweet = new Tweet();
        //body parser lets us use the req.body
        tweet.authorName = req.body.authorName;
        tweet.authorHandle = req.body.authorHandle;
        tweet.text = req.body.text;
        tweet.timestamp = req.body.timestamp;
        tweet.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Tweet successfully added!' });
        });
    })

router.route('/tweets/:tweet_id')
    .delete(function (req, res) {
        //selects the tweet by its ID, then removes it.
        Tweet.remove({ _id: req.params.tweet_id }, function (err, tweet) {
            if (err)
                res.send(err);
            res.json({ message: 'Tweet has been deleted' })
        })
    });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function () {
        console.log(`api running on port ${port}`);
    });