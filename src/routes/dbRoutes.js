
var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var eventsData = [
    {   name: 'Event 1',
        description: 'the first event',
        date: '2016.01.01',
        time: '1:00 PM',
        duration: '1 Hour',
        location: {
            streetAddr: '101 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 100
    },
    {   name: 'Event 2',
        description: 'the second event',
        date: '2016.02.02',
        time: '2:00 PM',
        duration: '2 Hour',
        location: {
            streetAddr: '202 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 200
    },
    {   name: 'Event 3',
        description: 'the third event',
        date: '2016.03.03',
        time: '3:00 PM',
        duration: '3 Hour',
        location: {
            streetAddr: '303 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 300
    },
    {   name: 'Event 4',
        description: 'the fourth event',
        date: '2016.04.04',
        time: '4:00 PM',
        duration: '4 Hour',
        location: {
            streetAddr: '404 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 400
    }
];


dbRouter.route('/AddEventData')
    .get(function(req, res) {
        //res.send('Successful route test');

        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, result){
               res.send(result);
               db.close();
            });
        });
    });

module.exports = dbRouter;