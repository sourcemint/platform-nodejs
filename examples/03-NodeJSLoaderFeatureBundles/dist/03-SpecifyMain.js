require.bundle("", function(require)
{
    
    require.memoize("/init.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/init.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function(options)
        {
        	module.log("Hello from 03-SpecifyMain!");
        }
        
    });
    require.memoize("/package.json", {"main":"/init.js","directories":{"lib":"lib"},"mappings":{}});
});