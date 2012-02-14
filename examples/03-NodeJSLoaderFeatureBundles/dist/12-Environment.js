require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/12-Environment/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/12-Environment";
        
        exports.main = function(options)
        {			
        	module.log("Hello from 12-Environment!");
        	
        	if (module.id !== "/main.js")
        	{
        		throw new Error("`module.id` has incorrect value!");
        	}
        	
        	if (typeof require !== "function")
        	{
        		throw new Error("`require` is not a function!");
        	}
        
        	if (typeof require.id !== "function")
        	{
        		throw new Error("`require.id` is not a function!");
        	}
        
        	if (typeof require.async !== "function")
        	{
        		throw new Error("`require.async` is not a function!");
        	}
        
        	if (typeof require.sandbox !== "function")
        	{
        		throw new Error("`require.sandbox` is not a function!");
        	}
        	
        	if (typeof require.sandbox.id !== "string")
        	{
        		throw new Error("`require.sandbox.id` is not a string!");
        	}
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});