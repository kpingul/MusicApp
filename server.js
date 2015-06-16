/* Backend */
var express 	= require('express'),
	mongoose 	= require('mongoose'),
	bodyParser 	= require('body-parser'),
	app 		= express(),
	port 		= 3000;


app.use(bodyParser.json());

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


//GET 
app.get('/api/playlist', function(req, res){

	Song.find( function( err, doc ){
		res.send(doc);
		console.log(doc);
	});

});

//POST
app.post('/api/playlist', function(req, res) {

	//use body parser to request value of object from client 
	var artist = req.body.artist;
	var title = req.body.title;
	var rating = req.body.rating;

	var newsong = new Song({
		artist: artist,
		title: title,
		rating: rating
	});

	newsong.save();

});

//DELETE
app.delete('/api/playlist/:id', function( req, res ){

	var songId = req.params.id;
	
	Song.remove({_id: songId}, function(error) {

		if(error)
		
			console.log(error);
	
		Song.find('/api/playlist', function(err, doc) {
		
			res.send(doc);
		
		});

	});

});


//PUT



/*_______________________________________________*/
/*                 Server config                 */
/*_______________________________________________*/
app.listen(port, function() {
	console.log('Server running on port ' + port);
});