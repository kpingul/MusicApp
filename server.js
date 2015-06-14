/* Backend */
var express 	= require('express'),
	mongoose 	= require('mongoose'),
	app 		= express(),
	port 		= 3000;


/*_______________________________________________*/
/*                 MongoDB config                */
/*_______________________________________________*/

mongoose.connect('mongodb://localhost/musicplaylist');

var Schema = {

	artist: String,
	title: String,
	rate: Number
}

var Song = mongoose.model('song', Schema);

/*_______________________________________________*/
/*                 Route config                  */
/*_______________________________________________*/
	//index page
app.use(express.static(__dirname + '/'));

	//stylesheet
app.use(express.static(__dirname + '/client/css'));

	//javascripts

app.use(express.static(__dirname + 'client/'));


/*_______________________________________________*/
/*                 RESTFUL API config            */
/*_______________________________________________*/







/*_______________________________________________*/
/*                 Server config                 */
/*_______________________________________________*/
app.listen(port, function() {
	console.log('Server running on port ' + port);
});