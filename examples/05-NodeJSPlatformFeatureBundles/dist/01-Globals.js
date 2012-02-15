require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function()
        {
        	if (typeof global === "undefined")
        	{
        		throw new Error("The 'global' global variable should be defined!");
        	}
        
        	if (typeof process === "undefined")
        	{
        		throw new Error("The 'process' global variable should be defined!");
        	}
        	
        	if (typeof Buffer === "undefined")
        	{
        		throw new Error("The 'Buffer' global variable should be defined!");
        	}
        
        	
        	if (typeof setTimeout === "undefined")
        	{
        		throw new Error("The 'setTimeout' global variable should be defined!");
        	}
        	
        	if (typeof clearTimeout === "undefined")
        	{
        		throw new Error("The 'clearTimeout' global variable should be defined!");
        	}
        
        	if (typeof setInterval === "undefined")
        	{
        		throw new Error("The 'setInterval' global variable should be defined!");
        	}
        
        	if (typeof clearInterval === "undefined")
        	{
        		throw new Error("The 'clearInterval' global variable should be defined!");
        	}
        
        	
        	if (typeof require.resolve !== "function")
        	{
        		throw new Error("'require.resolve' on the global 'require' variable should be a function!");
        	}
        	
        	
        	if (typeof __filename === "undefined")
        	{
        		throw new Error("The '__filename' global variable should be defined!");
        	}
        	
        	// TODO: Detect running mode and insist on test if running in sourcemint loader.
        	if (typeof require.sandbox !== "undefined")
        	{
        		if (__filename !== (require.sandbox.id + module.id))
        		{
        			throw new Error("The '__filename' global does not equal the value of 'require.sandbox.id + module.id'!");
        		}
        	}
        	
        	if (typeof __dirname === "undefined")
        	{
        		throw new Error("The '__dirname' global variable should be defined!");
        	}
        
        	// TODO: Detect running mode and insist on test if running in sourcemint loader.
        	if (typeof require.sandbox !== "undefined")
        	{
        		if (__dirname !== (require.sandbox.id + module.id).replace(/\/([^\/]*)$/,""))
        		{
        			throw new Error("The '__dirname' global does not equal the value of 'PATH.dirname(require.sandbox.id + module.id)'!");
        		}
        	}
        	
        	console.log("01-Globals OK");
        }
        
        
        if (require.main === module) {
        	exports.main();
        }
        
    });
    require.memoize("/package.json", {"name":"sourcemint-platform-nodejs-examples-04-NodeJSPlatformFeatures-01-Globals","version":"0.1.0","engines":{"nodejs":"0.x"},"scripts":{"test":"node main"},"main":"/main.js","directories":{"lib":"lib"},"mappings":{}});
});