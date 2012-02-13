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
    require.memoize("efd2f7b78829c6c56446bbb200a43f2b418987ab/greetings.js", function(require, exports, module)
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
    require.memoize("efd2f7b78829c6c56446bbb200a43f2b418987ab/logger.js", function(require, exports, module)
    {
        
        exports.log = function(message)
        {
        	module.log(message);
        }
        
    });
    require.memoize("d140ff9fd2383e3cf32d9dde3d56fe216c4ecbc4/words/hello.js", function(require, exports, module)
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
    require.memoize("1f3337f8f6f0303cff72d66d597d715a3589870c/lib/H.js", function(require, exports, module)
    {
        
        exports.getLetter = function()
        {
            return "H";
        }
        
    });
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"efd2f7b78829c6c56446bbb200a43f2b418987ab"},"directories":{"lib":"lib"}});
    require.memoize("efd2f7b78829c6c56446bbb200a43f2b418987ab/package.json", {"mappings":{"package":"d140ff9fd2383e3cf32d9dde3d56fe216c4ecbc4"},"directories":{"lib":""}});
    require.memoize("d140ff9fd2383e3cf32d9dde3d56fe216c4ecbc4/package.json", {"mappings":{"package":"efd2f7b78829c6c56446bbb200a43f2b418987ab","letters":"1f3337f8f6f0303cff72d66d597d715a3589870c"},"directories":{"lib":"words"}});
    require.memoize("1f3337f8f6f0303cff72d66d597d715a3589870c/package.json", {"directories":{"lib":"lib"}});
});