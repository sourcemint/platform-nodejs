
exports.main = function()
{
    console.log("Hello from Example!");
    
    require.async("./sub-module", function(SUB_MODULE)
    {
        SUB_MODULE.main();
        
        require.sandbox("sub-package.js", function(sandbox)
        {
            sandbox.main();
        });
    });
}
