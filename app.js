var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Get method
app.get('/', (req, res) => {
    res.json({
        "message": "response of block data"
    });
});

//Post method

app.post('/', (req, res) => {
    res.json({
        "message": "Adding of the block"
    });
});

//Adding router
require('./routes/block.routes.js')(app);

//listening at port 8000
var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});