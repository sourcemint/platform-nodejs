require.bundle("", function(require)
{
    
    require.memoize("/ExtraBundle.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/ExtraBundle.js";
        var __dirname = require.sandbox.id + "";
        
        var MAIN = require("./main.js");
        
        exports.init = function()
        {
        	module.log(MAIN.getExtraBundleGreeting());
        }
        
    });
    require.memoize("/package.json", {"main":"/ExtraBundle.js","directories":{"lib":""},"mappings":{}});
});