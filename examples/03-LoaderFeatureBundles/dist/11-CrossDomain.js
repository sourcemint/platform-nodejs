// @sourcemint-bundle-partition-map: {"report":[1473,2942]}                                                                                                                           
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
        
        	module.log("Hello from 11-CrossDomain!");
        
            return Q.all([
        		"https://raw.github.com/sourcemint/loader-js/master/examples/11-CrossDomain/CrossDomainBundle.js",
        		// TODO: Point to `http://sourcemint.com/` URL
        		"http://static.cadorn.net/CrossDomainBundle.js"
        	].map(function(url) {
        		var result = Q.defer();
        
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
            }));
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain/main.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-LoaderFeatureBundles/dist/11-CrossDomain.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/11-CrossDomain/main.js"}}}
