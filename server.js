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
	rating: Number
}

var Song = mongoose.model('song', Schema);



/*_______________________________________________*/
/*                 Route config                  */
/*_______________________________________________*/


//index page
app.use(express.static(__dirname + '/'));





/*_______________________________________________*/
/*                 RESTFUL API config            */
/*_______________________________________________*/


// app.get('/api/playlist', function(req, res){

// 	Song.find( function( err, doc ){
// 		res.send(doc);
// 		console.log(doc);
// 	});

// });




/*_______________________________________________*/
/*                 Server config                 */
/*_______________________________________________*/
app.listen(port, function() {
	console.log('Server running on port ' + port);
});