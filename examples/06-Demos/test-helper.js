
var Q = require("q"),
	ERROR = require("sourcemint-platform-nodejs/lib/util/error");


exports.makeTest = function(REQUIRE, EXPORTS, MODULE, testCallback)
{
	EXPORTS.main = function(MAIN)
	{
		var deferred = Q.defer();
		if (typeof MAIN === "undefined") {
			MAIN = REQUIRE("./main").main;
		}
		try
		{
			var onReadyDeferred = Q.defer();
		
			MAIN(onReadyDeferred);
			
			Q.when(onReadyDeferred.promise, function(onTestDoneCallback)
			{
				var testDoneDeferred = Q.defer();

				testCallback(Q, testDoneDeferred);
				
				return Q.when(testDoneDeferred.promise, function()
				{
					onTestDoneCallback(function stopped()
					{
						deferred.resolve();
					});
				});

			}).fail(deferred.reject);
		} catch(err) {
			deferred.reject(err);
		}
		return deferred.promise;
	}
	
	
	if (REQUIRE.main === MODULE) {
		EXPORTS.main().fail(ERROR.logError);
	}
}
