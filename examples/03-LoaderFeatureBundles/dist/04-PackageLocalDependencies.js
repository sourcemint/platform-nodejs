// @sourcemint-bundle-partition-map: {"report":[1777,4588]}                                                                                                                           
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        // One-way dependency.
        var GREETINGS = require("./greetings");
        
        exports.main = function(options)
        {
        	module.log(GREETINGS.getGreeting());
        };
        
    });
    require.memoize("/greetings.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/greetings.js";
        var __dirname = require.sandbox.id + "";
        
        // Circular dependency.
        var HELLO = require("./words/hello");
        
        exports.getGreeting = function()
        {
        	return HELLO.getWord() + " from " + HELLO.getName() + "!";
        }
        
        exports.getName = function()
        {
        	return "04-PackageLocalDependencies";
        }
        
    });
    require.memoize("/words/hello.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/words/hello.js";
        var __dirname = require.sandbox.id + "/words";
        
        // Circular dependency.
        var GREETINGS = require("../greetings");
        
        exports.getWord = function()
        {
        	return "Hello";
        }
        
        exports.getName = function()
        {
        	return GREETINGS.getName();
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/main.js":{"staticLinks":{"./greetings":"./greetings"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/greetings.js":{"staticLinks":{"./words/hello":"./words/hello"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/words/hello.js":{"staticLinks":{"../greetings":"../greetings"},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/main.js":{"staticLinks":{"./greetings":"./greetings"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/greetings.js":{"staticLinks":{"./words/hello":"./words/hello"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/words/hello.js":{"staticLinks":{"../greetings":"../greetings"},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-LoaderFeatureBundles/dist/04-PackageLocalDependencies.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/main.js","/greetings.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/greetings.js","/words/hello.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/04-PackageLocalDependencies/words/hello.js"}}}
