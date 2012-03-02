/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

var FS = require("fs"),
	PATH = require("path"),
	Q = require("q"),
	UTIL = require("n-util"),
	DETECTIVE = require("detective"),
	BUNDLER = require("sourcemint-bundler-js/lib/bundler"),
	CONNECT = require("connect");


// TODO: Use helper function from bundler where possible.
// TODO: Use AST to detect require statements.

exports.bundle = BUNDLER.bundle;



exports.parseModule = function(path, options)
{
	var deferred = Q.defer();

	Q.call(function()
	{
		var report = {};

		if (options.treatAs === "js-module")
		{
    		var code = FS.readFileSync(path).toString();
    
    		report.staticLinks = {};
    		report.dynamicLinks = {};
    
    		// NOTE: We wrap the module code in a function to ensure we don't fail on top-level `return`s.
    		var matches = DETECTIVE.find("((function(){" + code + "})());");
    		
    		matches.strings.forEach(function(id)
    		{
    			report.staticLinks[id] = adjustStaticLink(path, id, options);
    		});
    
    		if (matches.expressions.length > 0)
    		{
    			// TODO: Ensure there are `` defined in the package descriptor of the package.
    			// TODO: Throw in struct mode.
    			// 		 throw new Error("Found variable argument to require statement 'require(" + id + ")' in module '" + path + "'. 'require()' only accepts a string literal. Use 'require.async(" + id + ", function(EXPORTS) {})' instead.");
    		}
    
    		// TODO: Use `detective` to find.
    		scrapeAsyncRequires(code).forEach(function(name)
    		{
    			report.dynamicLinks[name] = name;
    		});
    
    		// TODO: Look for `require.resolve("<str>")` and `require.id("<str>")`.
		}

		deferred.resolve(report);
	}).fail(function(err)
	{
		err.stack = "Error '" + err.message + "' while parsing module: " + path + "\n" + err.stack;
		deferred.reject(err);
	});

	return deferred.promise;
}

/**
 * All static links that point to global modules (not mapped in package descriptor)
 * get resolved based on dependency declarations and mapped.
 */
function adjustStaticLink(path, id, options)
{
	// We don't care about relative links.
	if (/^\./.test(id))
	{
		return id;
	}
	// We don't care about already mapped links.
	var idParts = id.match(/^([^\/]*)(\/(.*?))?$/);
	if (idParts && 
		typeof options.descriptor.mappings === "object" &&
	    typeof options.descriptor.mappings[idParts[1]] !== "undefined")
	{
		return id;
	}

	// See if we have a NodeJS native module.
	// TODO: Instead of using this NodeJS environment to check if module is native use a different test that
	//		 is specific to the NodeJS version we are bundling for.
	
	function lookup()
	{
		var idPath = findNodeModulesPackage(PATH.dirname(path), idParts[1]);
		
		if (!idPath)
		{
			throw new Error("Unable to locate package '" + id + "' in 'node_modules/' directories starting at '" + path + "'.");
		}

		if (typeof options.packageReport.mappings[idParts[1]] === "undefined")
		{
			options.packageReport.mappings[idParts[1]] = idPath;
		}

		if (!idParts[2])
		{
			var descriptor = JSON.parse(FS.readFileSync(idPath + "/package.json"));

			var main = descriptor.main || "/index.js";
			
			main = main.replace(/^\./, "");
			
			if (!/^\//.test(main))
			{
				main = "/" + main;
			}
			
			if (!/\.js$/.test(main) && !PATH.existsSync(idPath + main))
			{
				main += ".js";
			}

			id += main;
		}

		return id;
	}
	
	try
	{
		if (id === require.resolve(id))
		{
			if (typeof options.packageReport.mappings["__nodejs__"] === "undefined")
			{
				options.packageReport.mappings["__nodejs__"] = "nodejs.org/0";
			}
			return "__nodejs__/" + id;
		}
		return lookup();
	}
	catch(e)
	{
		return lookup();
	}
	
	return id;
}

function findNodeModulesPackage(path, name)
{
	if (PATH.existsSync(path + "/node_modules/" + name + "/package.json"))
	{
		return path + "/node_modules/" + name;
	}
	else
	if (PATH.dirname(path) !== path)
	{
		return findNodeModulesPackage(PATH.dirname(path), name);
	}
	return false;	
}


/**
 * Scrape dependencies from a Modules/1.1 module. Mostly borrowed from FlyScript.
 * Instead of just looking for string literals we also look for dynamic requires.
 * @source http://code.google.com/p/bravojs/source/browse/bravo.js
 * @todo Use AST analysis here instead of regular expression.
 */
function scrapeAsyncRequires(txt)
{
    var dep = [],
        m,
        requireRE = /\/\/.*|\/\*[\s\S]*?\*\/|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|[;=(,:!^]\s*\/(?:\\.|[^\/\\])+\/|(?:^|[^A-Za-z0-9_\.])\s*require\.async\s*\(\s*("(?:\\[\s\S]|[^"\\,])*"|'(?:\\[\s\S]|[^'\\,])*'|(?:\\[\s\S]|[^\)\\,])*)\s*,/g;
    for (requireRE.lastIndex = 0; m = requireRE.exec(txt);)
        if (m[1]) dep.push(m[1]);
    return dep;
}

exports.resolveUri = function(uri)
{
	return Q.call(function()
	{
        if (PATH.existsSync(uri + ".js"))
        {
            return FS.realpathSync(uri + ".js");
        }
		else
        if (PATH.existsSync(uri))
        {
            return FS.realpathSync(uri);
        }
		else
		if (/^nodejs\.org\/0\//.test(uri))
		{
			return "IGNORE";
		}
		else
		{
			throw new Error("Could not find file at path: " + uri);
		}
	});
}


exports.remapSources = function(report)
{
	return Q.call(function()
	{
		// We do nothing by default.

		return report;
	});
}


exports.getBundleHeader = function()
{
	return "";
}


exports.encodeModule = function(path, canonicalId, options)
{
	return Q.call(function()
	{
		var code = FS.readFileSync(path).toString(),
		    ext = PATH.basename(path).replace(/^.*?\.([^\.]*)$/, "$1");

        if (options.treatAs === "js-module")
        {
			var basePath = options.bundlePath.replace(/\.js$/, "");
			
			var dirname = PATH.dirname(canonicalId);
			if (dirname === "/") {
				dirname = "";
			} else
			if (!/^\//.test(dirname)) {
				dirname = "/" + dirname;
			}

			code = [
			    'function(require, exports, module)\n{',
			    // @see http://nodejs.org/docs/latest/api/globals.html
			    // TODO: Inject and fix environment based on options.
			    '    var __filename = require.sandbox.id + "' + canonicalId + '";',
			    '    var __dirname = require.sandbox.id + "' + dirname + '";',
			    '    ' + replaceStaticLinks(code).split('\n').join('\n    '),
			    '}'
			].join('\n');
		}
		
		function replaceStaticLinks(code)
		{
			// If any of the static links have been remapped during the bundling process
			// we adjust the code here.
			for (var id in options.staticLinks)
			{
				if (options.staticLinks[id] !== id)
				{
					// TODO: Do this much more elegantly.
					var re = new RegExp("(require\\([\"'])" + id + "([\"']\\))", "g");
					code = code.replace(re, "$1" + options.staticLinks[id] + "$2");
				}
			}
			return code;
		}

		return code;
	});
}




exports.hoist = function(basePath, baseOptions)
{
    var basePathParts = basePath.match(/^(.*?)(\/\$(\d+))?$/);
    
    return function(req, res, next)
    {
        var packagePath = basePath,
            options = UTIL.copy(baseOptions);

        // See if the base path has a parameter in it that we need to fill from the request parameters.
        // e.g. app.get(/^(?:\/([^\/]*?))(?:\.js)?(\/.*)?$/, BUNDLER.hoist(__dirname + "/$1", {
        if (typeof basePathParts[2] !== "undefined")
        {
            // TODO: Make this more generic.
            var paramIndex = parseInt(basePathParts[3]);
            if (req.params.length != (paramIndex + 1)) {
                throw new Error("Paramater index '" + paramIndex + "' used in packagePath '" + packagePath + "' not found in request.params '" + JSON.stringify(req.params) + "'!");
            }
            packagePath = packagePath.replace("$" + paramIndex, req.params[paramIndex - 1]);
        }

        if (typeof options.bundleUrlPrefix !== "undefined")
        {
            var bundleUrlPrefixParts = options.bundleUrlPrefix.match(/\$(\d+)/);
            if (bundleUrlPrefixParts && typeof bundleUrlPrefixParts[1] !== "undefined") {
                options.bundleUrlPrefix = options.bundleUrlPrefix.replace("$" + bundleUrlPrefixParts[1], req.params[parseInt(bundleUrlPrefixParts[1]) - 1]);
            }
        }

        if (PATH.exists(packagePath, function(exists)
        {
            if (exists)
            {
                req.url = req.params[req.params.length-1] || "";
                exports.Middleware(packagePath, options).handle(req, res);
            }
            else
            {
                console.error("Could not find package at '" + packagePath + "' requested by URL '" + req.originalUrl + "'!")

                if (typeof next === "function")
                {
                    next();
                }
                else
                {
                    // TODO: More generic error handler here?
                    res.writeHead(404);
                    res.end("File found!");
                }
            }
        }));
    };
}

var middlewareInstances = {};

var Middleware = exports.Middleware = function(packagePath, options)
{
    options = options || {};
    options.bundleLoader = options.bundleLoader || false;
    options.forceCompleteBuild = options.forceCompleteBuild || false;
    options.rebuildOnSourceChanges = options.rebuildOnSourceChanges || true;

    var distributionBasePath = options.distributionBasePath || (process.cwd() + "/.sourcemint/dist/" + packagePath.replace(/\//g, "+"));

    // If we are called as a factory we create an instance if we don't already have one.
    if (!(this instanceof Middleware))
    {
        // Check if we already have an instance.
        var instanceKey = distributionBasePath + "/" + PATH.basename(packagePath);
        if (middlewareInstances[instanceKey])
        {
            if (middlewareInstances[instanceKey][0] !== packagePath) {
                throw new Error("Cannot store a different package '" + packagePath + "' in the same distribution path '" + instanceKey + "' as already used by package '" + middlewareInstances[instanceKey][0] + "'!");
            }
            if (middlewareInstances[instanceKey][1] !== JSON.stringify(options)) {
                throw new Error("Cannot store the same package '" + packagePath + "' in the same distribution path '" + instanceKey + "' using different options!");
            }
            return middlewareInstances[instanceKey][2];
        }
        middlewareInstances[instanceKey] = [
            packagePath,
            JSON.stringify(options),
            new Middleware(packagePath, options)
        ];
        return middlewareInstances[instanceKey][2];
    }

    var self = this;

    var deferred = Q.defer();
    self.ready = deferred.promise;
    
    BUNDLER.bundle(packagePath, distributionBasePath, options).then(function()
    {
        deferred.resolve(distributionBasePath + "/" + PATH.basename(packagePath));
    }, function(err)
    {
        deferred.reject(err);
        console.error(err.stack);
    });
}

Middleware.prototype.handle = function(request, response)
{
    var self = this;

    Q.when(self.ready, function(distPath)
    {
        request.url = "/" + PATH.basename(distPath) + (request.url || ".js");

        (CONNECT.static(PATH.dirname(distPath)))(request, response, function()
        {
            response.writeHead(404);
            response.end("Not found!");
        });

    }).fail(function(err)
    {
        response.writeHead(500);
        // TODO: Only expose error if configured to do so.
        console.error(err.stack);
        response.end("Error: " + err);
    });
}

