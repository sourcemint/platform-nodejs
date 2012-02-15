
var LOADER = require("sourcemint-platform-nodejs/lib/loader"),
	ERROR = require("sourcemint-platform-nodejs/lib/util/error"),
	BUNDLER = require("sourcemint-bundler-js/lib/bundler"),
	PATH = require("path"),
	FS = require("fs");


exports.main = function()
{
	var done = Q.ref();
	
	var basePath = __dirname + "/../04-NodeJSPlatformFeatures";

	FS.readdirSync(basePath).forEach(function(filename)
	{
		var exampleBasePath = basePath + "/" + filename;

		if (PATH.existsSync(exampleBasePath + "/package.json"))
		{
			done = Q.when(done, function()
			{
				return BUNDLER.bundle(exampleBasePath, __dirname + "/dist", {
					packageIdHashSeed: "__TEST__"
				});
			});
		}
	});

	return done.then(function()
	{
		var done = Q.ref();
		
		FS.readdirSync(__dirname + "/dist").filter(function(filename)
		{
			return FS.statSync(__dirname + "/dist/" + filename).isFile();
		}).map(function(filename)
		{
			return __dirname + "/dist/" + filename;
		}).forEach(function(uri)
		{
			done = Q.when(done, function()
			{
				return bootBundle(uri);
			});
		});
		
		return done;
	});
}

function bootBundle(uri)
{
	var deferred = Q.defer();

	console.log("Booting bundle: " + uri);

	LOADER.sandbox(uri, function(sandbox)
	{
		try {
			Q.when(sandbox.main(), deferred.resolve, deferred.reject);
		} catch(e) {
			deferred.reject(e);
		}
	}, {
		onInitModule: function(moduleInterface, moduleObj)
		{
			moduleObj.require.API = {
				Q: Q
			};
		}
	});

	return deferred.promise;
}


if (require.main === module) {
	exports.main().fail(ERROR.logError);
}

