// @sourcemint-bundle-partition-map: {"report":[1072,2966]}                                                                                                                           
require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        var TEXT = require("./hello.txt");
        
        exports.main = function(options)
        {
        	TEXT = TEXT.replace(" \\ \" 0 - _ . ! ~ * ' ( ) ; , / ? : @ & = + $", "");
        
        	if (TEXT.length != 5)
        	{
        		throw new Error("Text was not decoded properly!");
        	}
        
        	module.log(TEXT + " from 07-TextModule!");
        }
        
    });
    require.memoize("/hello.txt", "Hello%20%5C%20%22%200%20-%20_%20.%20!%20~%20*%20'%20(%20)%20%3B%20%2C%20%2F%20%3F%20%3A%20%40%20%26%20%3D%20%2B%20%24");
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/main.js":{"staticLinks":{"./hello.txt":"./hello.txt"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/hello.txt":{"treatAs":"text"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule","packages":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/main.js":{"staticLinks":{"./hello.txt":"./hello.txt"},"dynamicLinks":{},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/hello.txt":{"treatAs":"text"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/03-LoaderFeatureBundles/dist/07-TextModule.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/main.js","/hello.txt":"/pinf/workspaces/github.com/sourcemint/platform-nodejs/0/examples/02-LoaderFeatures/07-TextModule/hello.txt"}}}
