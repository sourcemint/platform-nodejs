/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

var FS = require("fs"),
	PATH = require("path"),
	Q = require("q");


// TODO: Use helper function from bundler where possible.

exports.parseModule = function(path, options)
{
	return Q.call(function()
	{
		var report = {};

		var code = FS.readFileSync(path).toString();

		report.staticLinks = {};
		report.dynamicLinks = {};

		scrapeRequires(code).forEach(function(id)
		{
			if (/^["']{1}.*["']{1}/.test(id))
			{
				// String literal require.
				id = id.substring(1, id.length-1);
				report.staticLinks[id] = adjustStaticLink(id, options);
			}
			else
			{
				// Variable require.
				// TODO: Specify line number once we detect via AST.
				throw new Error("Found variable argument to require statement 'require(" + id + ")' in module '" + path + "'. 'require()' only accepts a string literal. Use 'require.async(" + id + ", function(EXPORTS) {})' instead.");
			}
		});

		scrapeAsyncRequires(code).forEach(function(name)
		{
			report.dynamicLinks[name] = name;
		});

		// TODO: Scrape for `require.resolve("<str>")` and `require.id("<str>")`.

		return report;
	});
}

/**
 * All static links that point to global modules (not mapped in package descriptor)
 * get resolved based on dependency declarations and mapped.
 */
function adjustStaticLink(id, options)
{
	// We don't care about relative links.
	if (/^\./.test(id))
	{
		return id;
	}
	// We don't care about already mapped links.
	var idParts = id.match(/^([^\/]*)\/(.*?)$/);
	if (idParts && 
		typeof options.descriptor.mappings === "object" &&
	    typeof options.descriptor.mappings[idParts[1]] !== "undefined")
	{
		return id;
	}

	// See if we have a NodeJS native module.
	// TODO: Instead of using this NodeJS environment to check if module is native use a different test that
	//		 is specific to the NodeJS version we are bundling for.
	if (id === require.resolve(id))
	{
		if (typeof options.packageReport.mappings["__nodejs__"] === "undefined")
		{
			options.packageReport.mappings["__nodejs__"] = "nodejs.org/0";
		}
		return "__nodejs__/" + id;
	}

	// TODO: Resolve module against declared package dependencies using npm modules to do the parsing and resolving.

	return id;
}


/**
 * Scrape dependencies from a Modules/1.1 module. Mostly borrowed from FlyScript.
 * Instead of just looking for string literals we also look for dynamic requires.
 * @source http://code.google.com/p/bravojs/source/browse/bravo.js
 * @todo Use AST analysis here instead of regular expression.
 */
function scrapeRequires(txt)
{
    var dep = [],
        m,
        requireRE = /\/\/.*|\/\*[\s\S]*?\*\/|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|[;=(,:!^]\s*\/(?:\\.|[^\/\\])+\/|(?:^|[^A-Za-z0-9_\.])\s*require\s*\(\s*("(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^\\])*'|(?:\\[\s\S]|[^\)\\])*)\s*\)/g;
    for (requireRE.lastIndex = 0; m = requireRE.exec(txt);)
        if (m[1]) dep.push(m[1]);
    return dep;
}
function scrapeAsyncRequires(txt)
{
    var dep = [],
        m,
        requireRE = /\/\/.*|\/\*[\s\S]*?\*\/|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|[;=(,:!^]\s*\/(?:\\.|[^\/\\])+\/|(?:^|[^A-Za-z0-9_\.])\s*require\.async\s*\(\s*("(?:\\[\s\S]|[^"\\,])*"|'(?:\\[\s\S]|[^\\,])*'|(?:\\[\s\S]|[^\)\\,])*)\s*,/g;
    for (requireRE.lastIndex = 0; m = requireRE.exec(txt);)
        if (m[1]) dep.push(m[1]);
    return dep;
}

exports.resolveUri = function(uri)
{
	return Q.call(function()
	{
		if (PATH.existsSync(uri))
		{
			return FS.realpathSync(uri);
		}
		else
		if (PATH.existsSync(uri + ".js"))
		{
			return FS.realpathSync(uri + ".js");
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
		var code = FS.readFileSync(path).toString();

		// Check if module is an ASCII resource file.
		if ([
		    "txt",
		    "text"
		].indexOf(PATH.basename(path).replace(/^.*?\.([^\.]*)$/, "$1")) >= 0)
		{
			code = '"' + encodeURIComponent(code) + '"';
		}
		else
		// Check if code is simply a JSON structure.
		if (/^[\s\n]*\{[\s\S]*\}[\s\n]*$/.test(code))
		{
			code = replaceStaticLinks(code);
		}
		else
		{
			var basePath = options.bundlePath.replace(/\.js$/, "");

			code = [
			    'function(require, exports, module)\n{',
			    // @see http://nodejs.org/docs/latest/api/globals.html
			    // TODO: Inject and fix environment based on options.
			    '    var __filename = require.sandbox.id + "' + canonicalId + '";',
			    '    var __dirname = require.sandbox.id + "' + ((PATH.dirname(canonicalId) !== "/")?"/" + PATH.dirname(canonicalId):"") + '";',
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
