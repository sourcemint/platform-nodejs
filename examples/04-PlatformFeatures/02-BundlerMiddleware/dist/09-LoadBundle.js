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