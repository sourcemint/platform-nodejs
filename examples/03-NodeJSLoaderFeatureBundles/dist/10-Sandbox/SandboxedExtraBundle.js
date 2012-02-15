require.bundle("", function(require)
{
    
    require.memoize("/SandboxedExtraBundle.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/SandboxedExtraBundle.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function(options)
        {
        	module.log("Hello from 10-Sandbox/SandboxedExtraBundle!");
        }
        
    });
    require.memoize("/package.json", {"main":"/SandboxedExtraBundle.js","directories":{"lib":"lib"},"mappings":{}});
});