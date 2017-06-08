'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var eventRouter = require('./src/routes/eventRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');



app.use('/Events', eventRouter);

app.get('/', function(req, res, next){
    res.render('index', {
        list: ['first val', '2nd val', '3rd val'],
        nav : [ { Link: 'Services', Text: 'Services'},
                { Link: 'Portfolio', Text: 'Portfolio'},
                { Link: 'About', Text: 'About'},
                { Link: 'Team', Text: 'Team'},
                { Link: 'Contact', Text: 'Contact'},
                { Link: 'Events', Text: 'Events'}
        ]
    });
    // test
});

app.get('/routing', function(req, res, next){
    res.send('Aloha routing (with changes)!');
});

app.listen(port, function(err){
    if (err) console.log(err);
    else console.log('The server is running on port: ' + port);
});