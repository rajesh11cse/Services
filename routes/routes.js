var path = require('path');

var appRouter = function(app) {
 	app.get("/", function(req, res) {
 		res.sendFile(path.join(__dirname, '../public', 'my_service.html'));
	});
}
module.exports = appRouter;


// ----Or------
/*module.exports = function(app) {
 	app.get("/", function(req, res) {
	    res.send("Hello World");
	});
	
}*/