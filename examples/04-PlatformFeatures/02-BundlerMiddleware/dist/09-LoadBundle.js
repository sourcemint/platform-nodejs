// @sourcemint-bundle-partition-map: {"report":[1149,2687]}                                                                                                                           
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        var Q;
        
        exports.main = function(options)
        {
        	Q = require.API.Q;
        	
        	var result = Q.defer();
        
        	module.log("Hello from 09-LoadBundle!");
        
        	var extraModuleID = "./ExtraModule";
        
        	require.async(extraModuleID, function(EXTRA_MODULE)
        	{
        	    EXTRA_MODULE.init();
        
        		result.resolve();
        	});
        
        	return result.promise;
        }
        
        exports.getExtraModuleGreeting = function()
        {
        	return "Hello from 09-LoadBundle/ExtraModule!";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js":{"staticLinks":{},"dynamicLinks":{"extraModuleID":"extraModuleID"},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js":{"staticLinks":{},"dynamicLinks":{"extraModuleID":"extraModuleID"},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/09-LoadBundle.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js"}}}
