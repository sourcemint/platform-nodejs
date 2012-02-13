require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        
        // One-way dependency.
        var GREETINGS = require("helpers/greetings"),
        	LOGGER = require("helpers/logger");
        
        exports.main = function(options)
        {
        	LOGGER.log(GREETINGS.getGreeting());
        }
        
    });
    require.memoize("0dd3491d0db6298e81fc0279641cb73ad4021cad/greetings.js", function(require, exports, module)
    {
        
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
    require.memoize("0dd3491d0db6298e81fc0279641cb73ad4021cad/logger.js", function(require, exports, module)
    {
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("d849fca69b213f5e4d1992dff0925894b59a3952/words/hello.js", function(require, exports, module)
    {
        
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
    require.memoize("372b6cf1a1c9c1ff72b8f7fd20b12eddeef5287e/lib/H.js", function(require, exports, module)
    {
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"0dd3491d0db6298e81fc0279641cb73ad4021cad"},"directories":{"lib":"lib"}});
    require.memoize("0dd3491d0db6298e81fc0279641cb73ad4021cad/package.json", {"mappings":{"package":"d849fca69b213f5e4d1992dff0925894b59a3952"},"directories":{"lib":""}});
    require.memoize("d849fca69b213f5e4d1992dff0925894b59a3952/package.json", {"mappings":{"package":"0dd3491d0db6298e81fc0279641cb73ad4021cad","letters":"372b6cf1a1c9c1ff72b8f7fd20b12eddeef5287e"},"directories":{"lib":"words"}});
    require.memoize("372b6cf1a1c9c1ff72b8f7fd20b12eddeef5287e/package.json", {"directories":{"lib":"lib"}});
});