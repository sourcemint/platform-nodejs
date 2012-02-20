require.bundle("", function(require)
{
    
    require.memoize("/main.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/main.js";
        var __dirname = require.sandbox.id + "";
        
        // One-way dependency.
        var GREETINGS = require("./greetings");
        
        exports.main = function(options)
        {
        	module.log(GREETINGS.getGreeting());
        };
        
    });
    require.memoize("/greetings.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/greetings.js";
        var __dirname = require.sandbox.id + "";
        
        // Circular dependency.
        var HELLO = require("./words/hello");
        
        exports.getGreeting = function()
        {
        	return HELLO.getWord() + " from " + HELLO.getName() + "!";
        }
        
        exports.getName = function()
        {
        	return "04-PackageLocalDependencies";
        }
        
    });
    require.memoize("/words/hello.js", function(require, exports, module)
    {
        var __filename = require.sandbox.id + "/words/hello.js";
        var __dirname = require.sandbox.id + "/words";
        
        // Circular dependency.
        var GREETINGS = require("../greetings");
        
        exports.getWord = function()
        {
        	return "Hello";
        }
        
        exports.getName = function()
        {
        	return GREETINGS.getName();
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});