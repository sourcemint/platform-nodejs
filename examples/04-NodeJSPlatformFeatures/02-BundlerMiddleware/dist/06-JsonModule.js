require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        var WORD = require("./word").word;
        
        exports.main = function(options)
        {
        	module.log(WORD + " from 06-JsonModule!");
        }
        
    });
    require.memoize("/word.js", {
    	word: "Hello"
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});