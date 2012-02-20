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
    require.memoize("32ab0c28393c3fbb23863556150045f2e480923f/greetings.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "32ab0c28393c3fbb23863556150045f2e480923f/greetings.js";
        var __dirname = require.sandbox.id + "/32ab0c28393c3fbb23863556150045f2e480923f";
        
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
    require.memoize("32ab0c28393c3fbb23863556150045f2e480923f/logger.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "32ab0c28393c3fbb23863556150045f2e480923f/logger.js";
        var __dirname = require.sandbox.id + "/32ab0c28393c3fbb23863556150045f2e480923f";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("981e9adad3c1288b46d8ca93853deddb17e4d55d/words/hello.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "981e9adad3c1288b46d8ca93853deddb17e4d55d/words/hello.js";
        var __dirname = require.sandbox.id + "/981e9adad3c1288b46d8ca93853deddb17e4d55d/words";
        
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
    require.memoize("bc674b2edd42208f9c5e2bae8e66aa32b6eda600/H.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "bc674b2edd42208f9c5e2bae8e66aa32b6eda600/H.js";
        var __dirname = require.sandbox.id + "/bc674b2edd42208f9c5e2bae8e66aa32b6eda600";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"32ab0c28393c3fbb23863556150045f2e480923f"},"directories":{"lib":""}});
    require.memoize("32ab0c28393c3fbb23863556150045f2e480923f/package.json", {"mappings":{"package":"981e9adad3c1288b46d8ca93853deddb17e4d55d"},"directories":{"lib":""}});
    require.memoize("981e9adad3c1288b46d8ca93853deddb17e4d55d/package.json", {"mappings":{"package":"32ab0c28393c3fbb23863556150045f2e480923f","letters":"bc674b2edd42208f9c5e2bae8e66aa32b6eda600"},"directories":{"lib":"words"}});
    require.memoize("bc674b2edd42208f9c5e2bae8e66aa32b6eda600/package.json", {"directories":{"lib":""},"mappings":{}});
});