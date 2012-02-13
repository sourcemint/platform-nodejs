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
    require.memoize("d6109ff5ae76742cb42153876e44ba87e2d787c4/greetings.js", function(require, exports, module)
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
    require.memoize("d6109ff5ae76742cb42153876e44ba87e2d787c4/logger.js", function(require, exports, module)
    {
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("73591e82f4e0340bf89a51c320d14dff5ea32dc8/words/hello.js", function(require, exports, module)
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
    require.memoize("a2f670b479282d78d9dfa6ded09cf5bc22ff85a6/lib/H.js", function(require, exports, module)
    {
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"d6109ff5ae76742cb42153876e44ba87e2d787c4"},"directories":{"lib":"lib"}});
    require.memoize("d6109ff5ae76742cb42153876e44ba87e2d787c4/package.json", {"mappings":{"package":"73591e82f4e0340bf89a51c320d14dff5ea32dc8"},"directories":{"lib":""}});
    require.memoize("73591e82f4e0340bf89a51c320d14dff5ea32dc8/package.json", {"mappings":{"package":"d6109ff5ae76742cb42153876e44ba87e2d787c4","letters":"a2f670b479282d78d9dfa6ded09cf5bc22ff85a6"},"directories":{"lib":"words"}});
    require.memoize("a2f670b479282d78d9dfa6ded09cf5bc22ff85a6/package.json", {"directories":{"lib":"lib"}});
});