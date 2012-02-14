require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/08-ResourceURI/main.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/08-ResourceURI";
        
        exports.main = function(options)
        {
        	var deferred = require.API.Q.defer();
        
        	var uri = require.sandbox.id + require.resolve("./hello.txt");
        
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
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});