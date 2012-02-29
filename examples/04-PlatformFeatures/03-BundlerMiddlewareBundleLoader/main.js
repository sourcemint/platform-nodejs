
var PATH = require("path"),
    CONNECT = require("connect"),
    BUNDLER = require("sourcemint-platform-nodejs/lib/bundler");


exports.main = function(onReadyDeferred, options)
{
	var server = CONNECT();

	server.use(CONNECT.router(function(app)
	{
        app.get(/^\/$/, CONNECT.static(__dirname));

        app.get(/^(\/example)(\.js)?(\/(.*))?$/, function (req, res)
		{
            req.url = req.params[2] || "";
            BUNDLER.Middleware(__dirname + "/example", __dirname + "/dist", {
		        packageIdHashSeed: "__EXAMPLE__",
		        bundleLoader: true
		    }).handle(req, res);
		});

        app.get(/^(\/sub-package)(\.js)?(\/(.*))?$/, function (req, res)
        {
            req.url = req.params[2] || "";
            BUNDLER.Middleware(__dirname + "/sub-package", __dirname + "/dist", {
                packageIdHashSeed: "__EXAMPLE__",
                bundleLoader: true
            }).handle(req, res);
        });
	}));

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
