require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/02-ReturnExports/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/02-ReturnExports";
        
        return {
        	main: function(options)
        	{
        		module.log("Hello from 02-ReturnExports!");
        	}
        };
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});