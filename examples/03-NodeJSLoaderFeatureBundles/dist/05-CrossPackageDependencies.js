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
    require.memoize("0dc7c21ac4311fa5aaaff9524b6df7c69dbcca75/greetings.js", function(require, exports, module)
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
    require.memoize("0dc7c21ac4311fa5aaaff9524b6df7c69dbcca75/logger.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/logger.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("adaff6a98b87ad86ad811426b3d58455be710a2b/words/hello.js", function(require, exports, module)
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
    require.memoize("880d7347f629551de3bc7bb2dd26533eaf27cdbd/lib/H.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib/H.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"0dc7c21ac4311fa5aaaff9524b6df7c69dbcca75"},"directories":{"lib":"lib"}});
    require.memoize("0dc7c21ac4311fa5aaaff9524b6df7c69dbcca75/package.json", {"mappings":{"package":"adaff6a98b87ad86ad811426b3d58455be710a2b"},"directories":{"lib":""}});
    require.memoize("adaff6a98b87ad86ad811426b3d58455be710a2b/package.json", {"mappings":{"package":"0dc7c21ac4311fa5aaaff9524b6df7c69dbcca75","letters":"880d7347f629551de3bc7bb2dd26533eaf27cdbd"},"directories":{"lib":"words"}});
    require.memoize("880d7347f629551de3bc7bb2dd26533eaf27cdbd/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});