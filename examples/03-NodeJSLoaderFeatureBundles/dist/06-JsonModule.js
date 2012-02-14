require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/06-JsonModule/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/06-JsonModule";
        
        var WORD = require("./word").word;
        
        exports.main = function(options)
        {
        	module.log(WORD + " from 06-JsonModule!");
        }
        
    });
    require.memoize("/word.js", {
    	word: "Hello"
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});