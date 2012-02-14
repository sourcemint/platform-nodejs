require.bundle("", function(require)
{
    
    require.memoize("/ExtraBundle.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/09-LoadBundle/./ExtraBundle/ExtraBundle.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/09-LoadBundle/./ExtraBundle";
        
        var MAIN = require("./main.js");
        
        exports.init = function()
        {
        	module.log(MAIN.getExtraBundleGreeting());
        }
        
    });
    require.memoize("/package.json", {"main":"/ExtraBundle.js","directories":{"lib":"lib"},"mappings":{}});
});