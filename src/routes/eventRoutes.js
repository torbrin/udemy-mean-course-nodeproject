/**
 * Created by Ed on 6/7/2017.
 */
var express = require('express');
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req, res){
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.find({}).toArray( function(err, results){
                res.render('events', {
                    nav     : [
                                {Link: 'Services', Text: 'Services'},
                                {Link: 'Portfolio', Text: 'Portfolio'},
                                {Link: 'About', Text: 'About'},
                                {Link: 'Team', Text: 'Team'},
                                {Link: 'Contact', Text: 'Contact'},
                                {Link: 'Events', Text: 'Events'}
                    ],
                    events  : results
                });
                db.close();
            });
        });
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('events');
            collection.find({}).toArray(function (err, results) {
                res.render('event', {
                    nav: [
                        {Link: 'Services', Text: 'Services'},
                        {Link: 'Portfolio', Text: 'Portfolio'},
                        {Link: 'About', Text: 'About'},
                        {Link: 'Team', Text: 'Team'},
                        {Link: 'Contact', Text: 'Contact'},
                        {Link: 'Events', Text: 'Events'}
                    ],
                    events: results[id]
                });
                db.close();
            });
        });
    });

module.exports = eventRouter;