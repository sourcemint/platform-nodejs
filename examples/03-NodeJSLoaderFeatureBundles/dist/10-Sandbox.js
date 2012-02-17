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