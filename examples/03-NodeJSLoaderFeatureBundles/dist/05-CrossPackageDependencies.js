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
    require.memoize("b4ba77afb712b55a6c1db300c2a14420ee5426ed/greetings.js", function(require, exports, module)
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
    require.memoize("b4ba77afb712b55a6c1db300c2a14420ee5426ed/logger.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/logger.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("c8e14bef608fc7302d9da08ed24744e32120bae1/words/hello.js", function(require, exports, module)
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
    require.memoize("207930a3e6602313baa58bb7d30edfdb07dc00d5/lib/H.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib/H.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/05-CrossPackageDependencies/lib";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"b4ba77afb712b55a6c1db300c2a14420ee5426ed"},"directories":{"lib":"lib"}});
    require.memoize("b4ba77afb712b55a6c1db300c2a14420ee5426ed/package.json", {"mappings":{"package":"c8e14bef608fc7302d9da08ed24744e32120bae1"},"directories":{"lib":""}});
    require.memoize("c8e14bef608fc7302d9da08ed24744e32120bae1/package.json", {"mappings":{"package":"b4ba77afb712b55a6c1db300c2a14420ee5426ed","letters":"207930a3e6602313baa58bb7d30edfdb07dc00d5"},"directories":{"lib":"words"}});
    require.memoize("207930a3e6602313baa58bb7d30edfdb07dc00d5/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});