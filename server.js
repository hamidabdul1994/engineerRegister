/***
File Name: server.js
Created By: Hamid Raza Noori
Created date:17/02/2017
Purpose:Start execution of Server and assigning the port or initalize the middleware of express server
***/
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.set('port', process.env.NODE_PORT || 3030);
app.set('host', process.env.NODE_IP || 'localhost');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",express.static("./")); //Angular
app.use(morgan("dev"));
app.use(require("./controller/index"));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
