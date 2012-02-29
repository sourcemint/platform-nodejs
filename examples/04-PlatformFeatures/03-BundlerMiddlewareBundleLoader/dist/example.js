// @sourcemint-bundle-partition-map: {"report":[937,2754]}                                                                                                                            
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function()
        {
            console.log("Hello from Example!");
            
            require.async("./sub-module", function(SUB_MODULE)
            {
                SUB_MODULE.main();
                
                require.sandbox("sub-package.js", function(sandbox)
                {
                    sandbox.main();
                });
            });
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{},"directories":{"lib":""}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/main.js":{"staticLinks":{},"dynamicLinks":{"\"./sub-module\"":"\"./sub-module\""},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/main.js":{"staticLinks":{},"dynamicLinks":{"\"./sub-module\"":"\"./sub-module\""},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/dist/example.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/03-BundlerMiddlewareBundleLoader/example/main.js"}}}
