require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies";
        
        // One-way dependency.
        var GREETINGS = require("helpers/greetings"),
        	LOGGER = require("helpers/logger");
        
        exports.main = function(options)
        {
        	LOGGER.log(GREETINGS.getGreeting());
        }
        
    });
    require.memoize("7560b93e78b4e2a0c520988986f530a1c49b5229/greetings.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/greetings.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies";
        
        var HELLO = require("package/hello");
        
        exports.getGreeting = function()
        {
        	return HELLO.getWord() + " from " + HELLO.getName() + "!";
        }
        
        exports.getName = function()
        {
        	return "05-CrossPackageDependencies";
        }
        
    });
    require.memoize("7560b93e78b4e2a0c520988986f530a1c49b5229/logger.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/logger.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("19819d780486f6050197ad891f5e90ba86dbd38f/words/hello.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/words/hello.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/words";
        
        var GREETINGS = require("package/greetings");
        
        exports.getWord = function()
        {
        	return require("letters/H").getLetter() + "ello";
        }
        
        exports.getName = function()
        {
        	return GREETINGS.getName();
        }
        
    });
    require.memoize("5390a08ebb853e94c69c041a471086f0d3e7d61f/lib/H.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib/H.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"7560b93e78b4e2a0c520988986f530a1c49b5229"},"directories":{"lib":"lib"}});
    require.memoize("7560b93e78b4e2a0c520988986f530a1c49b5229/package.json", {"mappings":{"package":"19819d780486f6050197ad891f5e90ba86dbd38f"},"directories":{"lib":""}});
    require.memoize("19819d780486f6050197ad891f5e90ba86dbd38f/package.json", {"mappings":{"package":"7560b93e78b4e2a0c520988986f530a1c49b5229","letters":"5390a08ebb853e94c69c041a471086f0d3e7d61f"},"directories":{"lib":"words"}});
    require.memoize("5390a08ebb853e94c69c041a471086f0d3e7d61f/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});