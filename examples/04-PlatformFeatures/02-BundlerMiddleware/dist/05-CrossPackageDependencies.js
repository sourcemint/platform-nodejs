require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        // One-way dependency.
        var GREETINGS = require("helpers/greetings"),
        	LOGGER = require("helpers/logger");
        
        exports.main = function(options)
        {
        	LOGGER.log(GREETINGS.getGreeting());
        }
        
    });
    require.memoize("9600bb1b572fba81a38e7d3c0eb638268e6a9d8d/greetings.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "9600bb1b572fba81a38e7d3c0eb638268e6a9d8d/greetings.js";
        var __dirname = require.sandbox.id + "/9600bb1b572fba81a38e7d3c0eb638268e6a9d8d";
        
        var HELLO = require("package/hello");
        
        exports.getGreeting = function()
        {
        	return HELLO.getWord() + " from " + HELLO.getName() + "!";
        }
        
        exports.getName = function()
        {
        	return "05-CrossPackageDependencies";
        }
        
    });
    require.memoize("9600bb1b572fba81a38e7d3c0eb638268e6a9d8d/logger.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "9600bb1b572fba81a38e7d3c0eb638268e6a9d8d/logger.js";
        var __dirname = require.sandbox.id + "/9600bb1b572fba81a38e7d3c0eb638268e6a9d8d";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("80b6bcb59fc2b65675648d0e052b75b4620764ee/words/hello.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "80b6bcb59fc2b65675648d0e052b75b4620764ee/words/hello.js";
        var __dirname = require.sandbox.id + "/80b6bcb59fc2b65675648d0e052b75b4620764ee/words";
        
        var GREETINGS = require("package/greetings");
        
        exports.getWord = function()
        {
        	return require("letters/H").getLetter() + "ello";
        }
        
        exports.getName = function()
        {
        	return GREETINGS.getName();
        }
        
    });
    require.memoize("aa0b8cfbcfff960996a8692caee6ae43f33d6a67/H.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "aa0b8cfbcfff960996a8692caee6ae43f33d6a67/H.js";
        var __dirname = require.sandbox.id + "/aa0b8cfbcfff960996a8692caee6ae43f33d6a67";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"9600bb1b572fba81a38e7d3c0eb638268e6a9d8d"},"directories":{"lib":""}});
    require.memoize("9600bb1b572fba81a38e7d3c0eb638268e6a9d8d/package.json", {"mappings":{"package":"80b6bcb59fc2b65675648d0e052b75b4620764ee"},"directories":{"lib":""}});
    require.memoize("80b6bcb59fc2b65675648d0e052b75b4620764ee/package.json", {"mappings":{"package":"9600bb1b572fba81a38e7d3c0eb638268e6a9d8d","letters":"aa0b8cfbcfff960996a8692caee6ae43f33d6a67"},"directories":{"lib":"words"}});
    require.memoize("aa0b8cfbcfff960996a8692caee6ae43f33d6a67/package.json", {"directories":{"lib":""},"mappings":{}});
});