require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/01-HelloWorld/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/01-HelloWorld";
        
        exports.main = function()
        {
        	module.log("Hello from 01-HelloWorld!");
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});