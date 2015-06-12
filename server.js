/* Backend */
var express 	= require('express'),
	app 		= express(),
	port 		= 3000;

/* config */


app.get('/', function( req, res ) {

	res.sendFile(__dirname + '/index.html');

});







/* Server Config */
app.listen(port, function() {
	console.log('Server running on port ' + port);
});