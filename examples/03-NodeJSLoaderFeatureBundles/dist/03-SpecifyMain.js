require.bundle("", function(require)
{
    
    require.memoize("/init.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/03-SpecifyMain/init.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/03-SpecifyMain";
        
        exports.main = function(options)
        {
        	module.log("Hello from 03-SpecifyMain!");
        }
        
    });
    require.memoize("/package.json", {"main":"/init.js","directories":{"lib":"lib"},"mappings":{}});
});