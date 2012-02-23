require.bundle("", function(require)
{
    
    require.memoize("/ExtraModule.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/ExtraModule.js";
        var __dirname = require.sandbox.id + "";
        
        var MAIN = require("./main.js");
        
        exports.init = function()
        {
        	module.log(MAIN.getExtraModuleGreeting());
        }
        
    });
    require.memoize("/package.json", {"main":"/ExtraModule.js","directories":{"lib":""},"mappings":{}});
});