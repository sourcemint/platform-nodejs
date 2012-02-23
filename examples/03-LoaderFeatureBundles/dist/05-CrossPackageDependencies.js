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
    require.memoize("c8fdbfb58ba344e241f350f4db644a5ca402b3bb/greetings.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "c8fdbfb58ba344e241f350f4db644a5ca402b3bb/greetings.js";
        var __dirname = require.sandbox.id + "/c8fdbfb58ba344e241f350f4db644a5ca402b3bb";
        
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
    require.memoize("c8fdbfb58ba344e241f350f4db644a5ca402b3bb/logger.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "c8fdbfb58ba344e241f350f4db644a5ca402b3bb/logger.js";
        var __dirname = require.sandbox.id + "/c8fdbfb58ba344e241f350f4db644a5ca402b3bb";
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("8006e010fb60da2be1a5ad691d389c8a3146127e/words/hello.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "8006e010fb60da2be1a5ad691d389c8a3146127e/words/hello.js";
        var __dirname = require.sandbox.id + "/8006e010fb60da2be1a5ad691d389c8a3146127e/words";
        
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
    require.memoize("91dc444cfecc833c728374ac4dc405a612d304f0/H.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "91dc444cfecc833c728374ac4dc405a612d304f0/H.js";
        var __dirname = require.sandbox.id + "/91dc444cfecc833c728374ac4dc405a612d304f0";
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"c8fdbfb58ba344e241f350f4db644a5ca402b3bb"},"directories":{"lib":""}});
    require.memoize("c8fdbfb58ba344e241f350f4db644a5ca402b3bb/package.json", {"mappings":{"package":"8006e010fb60da2be1a5ad691d389c8a3146127e"},"directories":{"lib":""}});
    require.memoize("8006e010fb60da2be1a5ad691d389c8a3146127e/package.json", {"mappings":{"package":"c8fdbfb58ba344e241f350f4db644a5ca402b3bb","letters":"91dc444cfecc833c728374ac4dc405a612d304f0"},"directories":{"lib":"words"}});
    require.memoize("91dc444cfecc833c728374ac4dc405a612d304f0/package.json", {"directories":{"lib":""},"mappings":{}});
});