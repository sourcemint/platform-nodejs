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
    require.memoize("378914dd2f7326f911e801df00b13d3cd56ac3e3/greetings.js", function(require, exports, module)
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
    require.memoize("378914dd2f7326f911e801df00b13d3cd56ac3e3/logger.js", function(require, exports, module)
    {
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("c0eb28e54b283dfb42bd8d72070e3c85cb84edc9/words/hello.js", function(require, exports, module)
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
    require.memoize("7f3655f775e4bc24033b726b64d29cf00a1c311f/lib/H.js", function(require, exports, module)
    {
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"378914dd2f7326f911e801df00b13d3cd56ac3e3"},"directories":{"lib":"lib"}});
    require.memoize("378914dd2f7326f911e801df00b13d3cd56ac3e3/package.json", {"mappings":{"package":"c0eb28e54b283dfb42bd8d72070e3c85cb84edc9"},"directories":{"lib":""}});
    require.memoize("c0eb28e54b283dfb42bd8d72070e3c85cb84edc9/package.json", {"mappings":{"package":"378914dd2f7326f911e801df00b13d3cd56ac3e3","letters":"7f3655f775e4bc24033b726b64d29cf00a1c311f"},"directories":{"lib":"words"}});
    require.memoize("7f3655f775e4bc24033b726b64d29cf00a1c311f/package.json", {"directories":{"lib":"lib"}});
});