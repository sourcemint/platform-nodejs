/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

var FS = require("fs"),
	PATH = require("path"),
	Q = require("q");


// TODO: Use helper function from bundler where possible.

exports.parseModule = function(path)
{
	return Q.call(function()
	{
		var report = {};

		var code = FS.readFileSync(path).toString();

		report.staticLinks = {};
		report.dynamicLinks = {};

		scrapeRequires(code).forEach(function(name)
		{
			if (/^["']{1}.*["']{1}/.test(name))
			{
				// String literal require.
				name = name.substring(1, name.length-1);
				report.staticLinks[name] = name;
			}
			else
			{
				// Variable require.
				// TODO: Specify line number once we detect via AST.
				throw new Error("Found variable argument to require statement 'require(" + name + ")' in module '" + path + "'. 'require()' only accepts a string literal. Use 'require.async(" + name + ", function(EXPORTS) {})' instead.");
			}
		});

		scrapeAsyncRequires(code).forEach(function(name)
		{
			report.dynamicLinks[name] = name;
		});

		return report;
	});
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


exports.encodeModule = function(path, canonicalId, staticLinks)
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
			// We don't have to do anything.
		}
		else
		{
			code = [
			    'function(require, exports, module)\n{',
			    '    ' + code.split('\n').join('\n    '),
			    '}'
			].join('\n');
		}

		return code;
	});
}
