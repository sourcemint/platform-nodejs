// @sourcemint-bundle-partition-map: {"report":[647,2133]}                                                                                                                            
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
    require.memoize("/package.json", {"main":"/init.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain/init.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain/init.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain/init.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain/init.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/03-SpecifyMain.js","packages":{},"modules":{"/init.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/03-SpecifyMain/init.js"}}}
