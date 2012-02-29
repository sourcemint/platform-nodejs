// @sourcemint-bundle-partition-map: {"report":[1508,2994]}                                                                                                                           
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
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
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/12-Environment.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/12-Environment/main.js"}}}
