require.bundle("", function(require)
{
    
    require.memoize("/ExtraBundle.js", function(require, exports, module)
    {
        
        var MAIN = require("./main.js");
        
        exports.init = function()
        {
        	module.log(MAIN.getExtraBundleGreeting());
        }
        
    });
    require.memoize("/package.json", {"main":"/ExtraBundle.js","directories":{"lib":"lib"}});
});