require.bundle("", function(require)
{
    
    require.memoize("/SandboxedExtraBundle.js", function(require, exports, module)
    {
        
        exports.main = function(options)
        {
        	module.log("Hello from 10-Sandbox/SandboxedExtraBundle!");
        }
        
    });
    require.memoize("/package.json", {"main":"/SandboxedExtraBundle.js","directories":{"lib":"lib"}});
});