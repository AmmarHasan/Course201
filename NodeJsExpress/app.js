
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mydata = require('./routes/myData');

var app = express();

// all environments
// theese  are middlewears and their sequence matters
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(function(req,res,next){

})
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router); // first it will see route
app.use(express.static(path.join(__dirname, 'public'))); // if not found in route, it will look in static file

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/show',mydata.showData);
app.get('/data',mydata.getData);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
