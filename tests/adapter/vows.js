
var VOWS = require("vows"),
	ASSERT = require("assert"),
	EXAMPLES = require("../examples");


VOWS.describe("Tests").addBatch(
{
	"All Examples":
	{
		topic: function()
		{
			var self = this;
			EXAMPLES.main({
		        packageBasePath: __dirname + "/../..",
		        extraExamples: EXAMPLES.extraExamples
		    }).then(function() {
				self.callback(true);
			}, function(err) {
				// NOTE: If this fires and `err` instanceof Error `vows` will fail this test.
				self.callback(err);
			});
		},
		"all examples worked": function(status)
		{
			ASSERT.equal(status, true);
		}
	}
}).export(module);
