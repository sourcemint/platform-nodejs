
var PATH = require("path"),
    CONNECT = require("connect"),
    BUNDLER = require("sourcemint-platform-nodejs/lib/bundler");


var EXAMPLES_BASE_PATH = __dirname + "/../../02-NodeJSLoaderFeatures",
    LOADER_BASE_PATH = PATH.dirname(PATH.dirname(PATH.dirname(require.resolve("sourcemint-loader-js/workspace/www/index.html"))));


exports.main = function(onReadyDeferred, options)
{
	var server = CONNECT();

	server.use(CONNECT.router(function(app)
	{
        app.get(/^\/$/, CONNECT.static(LOADER_BASE_PATH + "/workspace/www"));
        app.get(/^\/loader./, CONNECT.static(LOADER_BASE_PATH));
        app.get(/^\/loader.min.js.gz-size/, CONNECT.static(LOADER_BASE_PATH + "/workspace/www"));
        app.get(/^\/examples\/DevUI/, CONNECT.static(LOADER_BASE_PATH));

        app.get(/^\/examples\/([^\/]*?)(\.js)?(\/(.*))?$/, function (req, res)
		{
            var examplePath = EXAMPLES_BASE_PATH + "/" + req.params[0];

            // Only some of the loader examples can be generated from source packages as the other examples
            // are there to test incorrect bundles.
            if (!PATH.existsSync(examplePath)) {
                // There is no NodeJS source package so we simply serve the bundle from the loader.
                (CONNECT.static(LOADER_BASE_PATH))(req, res);
                return;
            }

            // TODO: Maybe we can do without this.
            req.url = req.url.substring(10 + req.params[0].length + (req.params[1] || "").length);

            // TODO: Make this `connect` compatible.
            BUNDLER.Middleware(examplePath, __dirname + "/dist", {
		        packageIdHashSeed: "__EXAMPLE__"
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
