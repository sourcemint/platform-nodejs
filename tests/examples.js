
var Q = require("q"),
	PATH = require("path"),
	FS = require("fs"),
	EXEC = require("child_process").exec,
	UTIL = require("n-util");

const EXAMPLES_BASE_PATH = __dirname + "/../examples";

exports.main = function(options)
{
	return linkPackages().then(function(packages)
	{
		var done = Q.ref();

		packages.forEach(function(packageName)
		{
			done = Q.when(done, function()
			{
				return installMissingDependencies(EXAMPLES_BASE_PATH + "/" + packageName).then(function()
				{
					console.log("Running example: " + EXAMPLES_BASE_PATH + "/" + packageName);
					
					return require(EXAMPLES_BASE_PATH + "/" + packageName + "/main.js").main();
				});
			});
		});
		
		return done;
	});
}


function installMissingDependencies(packageRootPath)
{
	var deferred = Q.defer();

	EXEC("npm install", {
		cwd: packageRootPath
	}, function(err, stdout, stderr)
	{
		if (err) deferred.reject(err);
		else if (stderr) deferred.reject(stderr)
		else {
			process.stdout.write(stdout);
			deferred.resolve();
		}
	});

	return deferred.promise;
}


function linkPackages()
{
	var packages = [];

	if (!PATH.existsSync(__dirname + "/../node_modules"))
	{
		FS.mkdirSync(__dirname + "/../node_modules", 0775);
	}
	try {
		// TODO: Find a symlink test that does not throw if it does not exist.
		FS.lstatSync(__dirname + "/../node_modules/sourcemint-platform-nodejs");
	} catch(e) {
		FS.symlinkSync("..", __dirname + "/../node_modules/sourcemint-platform-nodejs");
	}

	var ourDescriptor = JSON.parse(FS.readFileSync(__dirname + "/../package.json"));

	FS.readdirSync(EXAMPLES_BASE_PATH).forEach(function(filename)
	{
		var basePath = EXAMPLES_BASE_PATH + "/" + filename;

		if (PATH.existsSync(basePath + "/package.json"))
		{
			packages.push(filename);

			var descriptor = JSON.parse(FS.readFileSync(basePath + "/package.json"));

			if (!PATH.existsSync(basePath + "/node_modules"))
			{
				FS.mkdirSync(basePath + "/node_modules", 0775);
			}
			
			var deps = descriptor.devDependencies || {};
			UTIL.update(deps, descriptor.dependencies || {});
			Object.keys(deps).forEach(function(name)
			{
				if (name === "sourcemint-platform-nodejs" ||
					ourDescriptor.dependencies[name] === descriptor.dependencies[name] ||
					ourDescriptor.devDependencies[name] === descriptor.dependencies[name]
				) {
					try {
						// TODO: Find a symlink test that does not throw if it does not exist.
						FS.lstatSync(basePath + "/node_modules/" + name);
					} catch(e) {
						FS.symlinkSync(filename.replace(/[^\/]+/g, "..") + "/../../node_modules/" + name, basePath + "/node_modules/" + name);
					}
				}
			});
		}
	});

	return Q.call(function() {
		return packages;
	});
}


if (require.main === module)
{
	exports.main();
}
