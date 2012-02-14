require.bundle("", function(require)
{
    
    require.memoize("/SandboxedExtraBundle.js", function(require, exports, module)
    {
    var __filename = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/10-Sandbox/./SandboxedExtraBundle/SandboxedExtraBundle.js";
    var __dirname = "/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-NodeJSLoaderFeatureBundles/dist/10-Sandbox/./SandboxedExtraBundle";
        
        exports.main = function(options)
        {
        	module.log("Hello from 10-Sandbox/SandboxedExtraBundle!");
        }
        
    });
    require.memoize("/package.json", {"main":"/SandboxedExtraBundle.js","directories":{"lib":"lib"},"mappings":{}});
});