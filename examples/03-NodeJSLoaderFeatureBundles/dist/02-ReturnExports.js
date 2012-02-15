require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        return {
        	main: function(options)
        	{
        		module.log("Hello from 02-ReturnExports!");
        	}
        };
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});