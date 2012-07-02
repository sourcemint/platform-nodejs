/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

var LOADER = require("sourcemint-loader-js/loader"),
	VM = require("vm");
	PATH = require("path"),
	FS = require("fs"),
	HTTP = require("http");
	HTTPS = require("https"),
	Q = require("q");


// TODO: Only enable this in debug mode.
process.on("uncaughtException", function (err)
{
    // NOTE: `err.stack` seems to be useless here.
    console.error("Uncaught exception: " + err);
});	

exports.getReport = LOADER.require.getReport;

exports.sandbox = function(sandboxIdentifier, loadedCallback, sandboxOptions)
{
	sandboxOptions = sandboxOptions || {};

	var options = {},
		key;
	
	for (key in sandboxOptions)
	{
		options[key] = sandboxOptions[key];
	}
	
	// Set our own loader for the sandbox.
	options.load = function(uri, loadedCallback)
    {
		exports.resolveURI(uri).then(function(uri)
		{
			exports.loadBundleCode(uri).then(function(code)
			{
			    try
			    {
			    	evalBundle(uri, code);

			        loadedCallback();		        
			    }
			    catch(e)
			    {
			    	// TODO: Bubble this up to the loader's error handler.
		            console.error(e.stack);
			    }
			}, function(err)
			{
		    	// TODO: Bubble this up to the loader's error handler.
				console.error(err);
			});

		}, function(err)
		{
	    	// TODO: Bubble this up to the loader's error handler.
			console.error(err);
		});
	}
	
	function evalBundle(uri, code)
	{
    	// NOTE: If there are sytnax errors in code this will print
    	//		 error to stdout (if fourth argument set to `true`).
    	//		 There is no way to capture errors from here.
    	// @see https://github.com/joyent/node/issues/1307#issuecomment-1551157
    	// TODO: Find a better solution to handle errors here.
    	// TODO: Capture errors by watching this processe's stdout file log from
    	//		 another process.
        VM.runInNewContext(code, {
		    // TODO: Inject and fix environment based on options.
        	require: LOADER.require,
        	// TODO: Wrap to `console` object provided by `sandboxOptions` and inject module info.
        	console: console,
        	// NodeJS globals.
        	// @see http://nodejs.org/docs/latest/api/globals.html
        	global: global,
        	process: process,
        	Buffer: Buffer,
        	setTimeout: setTimeout,
        	clearTimeout: clearTimeout,
        	setInterval: setInterval,
        	clearInterval: clearInterval
        }, uri, true);
	}

	options.onInitModule = function(moduleInterface, moduleObj, pkg)
	{
		if (sandboxOptions.onInitModule)
		{
			sandboxOptions.onInitModule(moduleInterface, moduleObj);
		}

		// @see http://nodejs.org/docs/latest/api/globals.html
		
		// TODO: Implement `require.cache`. Will need proxies to do that.

		moduleObj.require.resolve = function()
		{
			return moduleObj.require.id.apply(null, arguments);
		}
	};
	
	options.onInitPackage = function(pkg, sandbox, options)
	{
		var origRequire = pkg.require;
		pkg.require = function(moduleIdentifier)
		{
            var canonicalId = (pkg.id + "/" + moduleIdentifier).replace(/\/+/, "/");

            // HACK
			// TODO: Use a better flag than '__' to indicate that module should be loaded here!
			if (pkg.id === "__nodejs.org/0__")
			{
				return {
					exports: require(moduleIdentifier.replace(/\.js$/, ""))
				};
			}
			else
			if (typeof options.moduleInitializers[canonicalId] === "undefined")
			{
				// TODO: Check if module is memoized. If not we assume we need to load bundle.
                // Check if `moduleIdentifier` resolves to a new bundle file on the local filesystem.

				var path = sandbox.id + "/" + canonicalId;

				if (PATH.existsSync(path))
				{
					// Load the bundle SYNCHRONOUSLY as new modules must be available before we return.
			    	evalBundle(path, FS.readFileSync(path, "utf8"));

			    	// Activate the new modules from the bundle.
			    	options.finalizeLoad(path, pkg.id);

			    	// Now let the loader continue.
					return origRequire(moduleIdentifier);
				}
	            else
	            {
	                return origRequire(moduleIdentifier);
	            }
			}
            else
            {
                return origRequire(moduleIdentifier);
            }
		};
		
		pkg.require.id = origRequire.id;
	}
	
	LOADER.require.sandbox(sandboxIdentifier, function(sandbox)
	{
		loadedCallback(sandbox);
	}, options);
}


// TODO: Relocate this to github.com/pinf/core-js/lib/resolver.js and return PINF URI info object.
exports.resolveURI = function(uri)
{
	var deferred = Q.defer(),
		m;

	// The github case.
	// TODO: Match various vendor APIS.
	if (m = uri.match(/^(github.com\/sourcemint\/loader-js\/0)\/-raw\/(.*)$/))
	{
		// TODO: Get `/pinf/workspaces` from `ENV.PINF_WORKSPACES` implemented at github.com/pinf/core-js/lib/env.js

		if (m[1] !== "github.com/sourcemint/loader-js/0")
			throw new Error("Only the 'github.com/sourcemint/loader-js/0' package is supported at this time!");

		deferred.resolve(require.resolve("sourcemint-loader-js/" + m[2]));
	}
	else
	if (m = uri.match(/^http(s)?:\/\/([^\/]*)(.*)$/))
	{
		deferred.resolve(uri);
	}
	else
	if (m = uri.match(/^(\/.*)$/))
	{
		deferred.resolve(uri);
	}
	else
	{
		throw new Error("Unable to resolve URI: " + uri);
		deferred.reject();
	}
	
	return deferred.promise;
}

//TODO: Relocate this to github.com/sourcemint/downloader-js/lib/bundle.js#loadBundleCode
exports.loadBundleCode = function(uri)
{
	var deferred = Q.defer(),
		m;
	
	try
	{
		// Check for local absolute file path.
		if (m = uri.match(/^(\/.*)$/))
		{
			// TODO: Pass this implementation as `options.readFile` to github.com/sourcemint/downloader-js/lib/bundle.js#loadBundleCode
			FS.readFile(uri, "utf8", function(err, code)
			{
				if (err)
				{
					// TODO: Throw a nice error object.
					console.log("Error reading file: " + uri);
			    	// TODO: Bubble this up to the loader's error handler.
					deferred.reject(new Error(err));
				}
	
				deferred.resolve(code);
			});
		}
		else
		// Check for HTTP(S) URI.
		if (m = uri.match(/^http(s)?:\/\/([^\/]*)(.*)$/))
		{
			// TODO: Relocate to github.com/sourcemint/downloader-js/lib/fetcher.js
			((m[1])?HTTPS:HTTP).get({
				host: m[2],
				path: (m[3])?m[3]:"/"
			}, function(response)
			{
				if (response.statusCode !== 200)
				{
			    	// TODO: Bubble this up to the loader's error handler.
					throw new Error("Did not get status 200 for URL: " + uri);
				}
		
				var code = [];
		
				response.on("data", function(chunk)
				{
					code.push(chunk);
			    });
		
				response.on("end", function()
				{
					deferred.resolve(code.join(""));
			    });
		
			}).on("error", function(e)
			{
		    	// TODO: Bubble this up to the loader's error handler.
			    console.error(e);
				deferred.reject(e);
			});
		}
		else
		{
			deferred.reject(new Error("Unable to load bundle code from URI: " + uri));
		}
	}
	catch(e)
	{
		console.error(e.stack);
	}
	return deferred.promise;
}

