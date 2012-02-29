// @sourcemint-bundle-partition-map: {"report":[712,2277]}                                                                                                                            
require.bundle("", function(require)
{
    
    require.memoize("/SandboxedExtraBundle.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/SandboxedExtraBundle.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function(options)
        {
        	module.log("Hello from 10-Sandbox/SandboxedExtraBundle!");
        }
        
    });
    require.memoize("/package.json", {"main":"/SandboxedExtraBundle.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/SandboxedExtraBundle.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/SandboxedExtraBundle.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/SandboxedExtraBundle.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/SandboxedExtraBundle.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/04-PlatformFeatures/02-BundlerMiddleware/dist/10-Sandbox/./SandboxedExtraBundle.js","packages":{},"modules":{"/SandboxedExtraBundle.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/10-Sandbox/SandboxedExtraBundle.js"}}}
