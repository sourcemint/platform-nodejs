
exports.main = function()
{
	return require("sourcemint-loader-js/tests/examples.js").main({
		LOADER: require("../lib/loader")
	});
}

if (require.main === module)
{
	exports.main().then(function()
	{
		console.log("Success!");

	},function(err)
	{
		// TODO: Use generic error formatter here.
		if (typeof err === "object" && typeof err.stack !== "undefined")
		{
			console.error("ERROR", err.stack);
		}
		else
		{
			console.error("ERROR", err);
		}
	});
}
