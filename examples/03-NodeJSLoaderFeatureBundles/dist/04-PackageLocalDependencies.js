require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies";
        
        // One-way dependency.
        var GREETINGS = require("./greetings");
        
        exports.main = function(options)
        {
        	module.log(GREETINGS.getGreeting());
        };
        
    });
    require.memoize("/greetings.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies/greetings.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies";
        
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
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies/words/hello.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/04-PackageLocalDependencies/words";
        
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
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});