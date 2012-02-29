// @sourcemint-bundle-partition-map: {"report":[712,2669]}                                                                                                                            
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
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/ExtraModule.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/ExtraModule.js":{"staticLinks":{"./main.js":"./main.js"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js":{"staticLinks":{},"dynamicLinks":{"extraModuleID":"extraModuleID"},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/ExtraModule.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/ExtraModule.js":{"staticLinks":{"./main.js":"./main.js"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/main.js":{"staticLinks":{},"dynamicLinks":{"extraModuleID":"extraModuleID"},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-LoaderFeatureBundles/dist/09-LoadBundle/./ExtraModule.js","packages":{},"modules":{"/ExtraModule.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/09-LoadBundle/ExtraModule.js"}}}
