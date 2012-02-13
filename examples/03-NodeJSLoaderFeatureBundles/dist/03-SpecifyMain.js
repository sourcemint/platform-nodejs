require.bundle("", function(require)
{
    
    require.memoize("/init.js", function(require, exports, module)
    {
        
        exports.main = function(options)
        {
        	module.log("Hello from 03-SpecifyMain!");
        }
        
    });
    require.memoize("/package.json", {"main":"/init.js","directories":{"lib":"lib"}});
});