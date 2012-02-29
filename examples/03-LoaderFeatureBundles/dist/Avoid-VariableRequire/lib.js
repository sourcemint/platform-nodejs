// @sourcemint-bundle-partition-map: {"report":[639,2178]}                                                                                                                            
require.bundle("", function(require)
{
    
    require.memoize("/lib.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/lib.js";
        var __dirname = require.sandbox.id + "";
        
        exports.main = function()
        {
        	return "Hello from Avoid-VariableRequire!";
        }
        
    });
    require.memoize("/package.json", {"main":"/lib.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire/lib.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire/lib.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire/lib.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire/lib.js":{"staticLinks":{},"dynamicLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-LoaderFeatureBundles/dist/Avoid-VariableRequire/./lib.js","packages":{},"modules":{"/lib.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/Avoid-VariableRequire/lib.js"}}}
