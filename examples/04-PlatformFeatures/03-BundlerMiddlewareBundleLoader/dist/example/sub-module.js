// @sourcemint-bundle-partition-map: {"report":[658,2510]}                                                                                                                            
require.bundle("", function(require)
{
    
    require.memoize("/sub-module.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/sub-module.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function()
        {
            console.log("Hello from Sub-Module!");
        }
        
    });
    require.memoize("/package.json", {"main":"/sub-module.js","mappings":{},"directories":{"lib":""}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/sub-module.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/sub-module.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}},"bundleLoader":true},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/sub-module.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/sub-module.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}},"bundleLoader":true},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/dist/example/./sub-module.js","packages":{},"modules":{"/sub-module.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/sub-module.js"},"bundleLoader":true}}
