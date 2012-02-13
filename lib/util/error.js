

exports.logError = function(err)
{
    console.error(exports.formatError(err));
}


exports.formatError = function(err)
{
    // TODO: Use generic error formatter here.
    if (typeof err === "object" && typeof err.stack !== "undefined")
    {
        return err.stack;
    }
    else
    {
        return err;
    }
}

