var express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser')
    bodyParser = require('body-parser'),
    app = express();

// configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json());
app.use(compression());

// CORS
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept');

    // If someone calls with method OPTIONS, let's display the allowed methods on our API
    if (req.method == 'OPTIONS') {
        res.status(200);
        res.write("Allow: GET,PUT,POST,DELETE,OPTIONS");
        res.end();
    } else {
        next();
    }
});

// routes
app.use('/', require('./app/routes'));


// 404
app.use('/404', function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// start server
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});