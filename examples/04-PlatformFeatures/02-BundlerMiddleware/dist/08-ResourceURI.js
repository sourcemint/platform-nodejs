// @sourcemint-bundle-partition-map: {"report":[1475,2961]}                                                                                                                           
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function(options)
        {
        	var deferred = require.API.Q.defer();
        
        	// NOTE: You can also use `require.resolve()` instead of `require.id()`.
        	//       We use the latter so we can load this module in the browser as well.
        	//       (The browser loader only supports `require.id()` out of the box)
        	var uri = require.sandbox.id + require.id("./hello.txt");
        
        	require.API.JQUERY(function($)
        	{
        		$.get(uri, function(data)
        		{
        			require.API.Q.call(function()
        			{
        				if (data !== "Hello")
        				{
        					throw new Error("Loaded resource does not have correct content!");
        				}
        
        				module.log(data + " from 08-ResourceURI!");
        
        			}).then(deferred.resolve, deferred.reject);
        		});
        	});
        	
        	return deferred.promise;
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/08-ResourceURI.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/08-ResourceURI/main.js"}}}
