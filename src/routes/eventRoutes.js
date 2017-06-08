/**
 * Created by Ed on 6/7/2017.
 */
var express = require('express');

var eventRouter = express.Router();

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

eventRouter.route('/')
    .get(function(req, res){
        res.render('events', {
            list: ['first event', '2nd event', '3rd event'],
            nav: [
                {Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio', Text: 'Portfolio'},
                {Link: 'About', Text: 'About'},
                {Link: 'Team', Text: 'Team'},
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
            ],
            events: eventsData
        });
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('event', {
            list: ['first event', '2nd event', '3rd event'],
            nav: [
                {Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio', Text: 'Portfolio'},
                {Link: 'About', Text: 'About'},
                {Link: 'Team', Text: 'Team'},
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
            ],
            events: eventsData[id]
        });
    });

module.exports = eventRouter;