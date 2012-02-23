require.bundle("", function(require)
{
    
    require.memoize("/lib.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/lib.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function()
        {
        	return "Hello from Avoid-VariableRequire!";
        }
        
    });
    require.memoize("/package.json", {"main":"/lib.js","directories":{"lib":""},"mappings":{}});
});