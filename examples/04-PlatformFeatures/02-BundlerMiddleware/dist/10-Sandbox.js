// @sourcemint-bundle-partition-map: {"report":[1243,2689]}                                                                                                                           
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
        
        	module.log("Hello from 10-Sandbox!");
        
        	var url = require.sandbox.id + require.id("./SandboxedExtraBundle");
        
        	require.sandbox(url, function(sandbox)
        	{
        		sandbox.main();
        
        		result.resolve();
        	}, {
        		onInitModule: function(moduleInterface, moduleObj)
        		{
        			moduleInterface.log = function()
        			{
        				module.logForModule(moduleObj, arguments);
        			}
        		}
        	});
        
        	return result.promise;
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/10-Sandbox.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/main.js"}}}
