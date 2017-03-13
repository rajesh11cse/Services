var express =  require("express");
var app = express();
var routes = require("./routes/routes.js")(app);



// load the files that are in the bower_components directory
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// load the files that are in the public directory
app.use('/public',  express.static(__dirname + '/public'));

var server = app.listen(3000, function(){
	console.log('Server listening at port : %s', server.address().port);
})
