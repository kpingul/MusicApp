/* Backend */
var express 	= require('express'),
	mongoose 	= require('mongoose'),
	app 		= express(),
	port 		= 3000;


/* MongoDB config */

mongoose.connect('mongodb://localhost/musicplaylist');

var Schema = {

	artist: String,
	title: String,
	rate: Number
}

var Song = mongoose.model('song', Schema);






/* Route config */


app.get('/', function( req, res ) {

	res.sendFile(__dirname + '/index.html');

});

/* RESTful API  config*/









/* Server Config */
app.listen(port, function() {
	console.log('Server running on port ' + port);
});