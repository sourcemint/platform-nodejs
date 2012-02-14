
var HTTP = require("http");


exports.main = function(onReadyDeferred)
{
	var server = HTTP.createServer();
	
	server.on("request", function (req, res)
	{
	    res.writeHead(200, {
	    	"Content-Type": "text/plain"
	    });
	    res.end("Hello from 01-HelloWorldServer");
	});

	/*TEST*/ if (typeof onReadyDeferred !== "undefined") {
	/*TEST*/     server.once("listening", function() {
	/*TEST*/         onReadyDeferred.resolve(function onTestDone(stoppedCallback) {
	/*TEST*/ 		     server.once("close", function() {
	/*TEST*/ 			     stoppedCallback();
	/*TEST*/ 		     });
	/*TEST*/ 		     server.close();
	/*TEST*/ 	     });
	/*TEST*/     });
	/*TEST*/ }
	
	server.listen(1337, "127.0.0.1");

	console.log('Server running at http://127.0.0.1:1337/');
}
