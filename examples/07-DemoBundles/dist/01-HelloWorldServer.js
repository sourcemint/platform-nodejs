require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        var HTTP = require("__nodejs__/http");
        
        
        exports.main = function(onReadyDeferred, options)
        {
        	var server = HTTP.createServer();
        
        	server.on("request", function (req, res)
        	{
        	    res.writeHead(200, {
        	    	"Content-Type": "text/plain"
        	    });
        	    res.end("Hello from 01-HelloWorldServer");
        	});
        
        	/*TEST*/ if (onReadyDeferred) {
        	/*TEST*/     server.once("listening", function() {
        	/*TEST*/         onReadyDeferred.resolve(function onTestDone(stoppedCallback) {
        	/*TEST*/ 		     server.once("close", function() {
        	/*TEST*/ 			     stoppedCallback();
        	/*TEST*/ 		     });
        	/*TEST*/ 		     server.close();
        	/*TEST*/ 	     });
        	/*TEST*/     });
        	/*TEST*/ }
        
        	server.listen(options.port, "127.0.0.1");
        
        	console.log("Server running at http://127.0.0.1:" + options.port + "/");
        }
        
        if (require.main === module) {
        	exports.main(null, {
        		port: 1337
        	});
        }
        
    });
    require.memoize("/package.json", {"name":"sourcemint-platform-nodejs-examples-06-Demos-01-HelloWorldServer","version":"0.1.0","engines":{"nodejs":"0.x"},"scripts":{"test":"node test"},"main":"/main.js","directories":{"lib":"lib"},"mappings":{"__nodejs__":"__nodejs.org/0__"}});
    require.memoize("043956adb8f7b26566da4cdc0e2ca286566dc494/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});