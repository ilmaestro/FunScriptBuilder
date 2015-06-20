#load "./Src/references.fsx"
#load "./Src/funscript.fsx"

open FunScript

let compile expr filepath = 
    // Compile the main function into a script
    let sw = System.Diagnostics.Stopwatch.StartNew()
    let source = FunScript.Compiler.Compiler.Compile(expr) //, components=components
    let sourceWrapped = sprintf "(function () {\n%s\n})();" source
    printfn "Generated JavaScript in %f sec..." (float sw.ElapsedMilliseconds / 1000.0) 
    System.IO.File.Delete filepath
    System.IO.File.WriteAllText(filepath, sourceWrapped)

//Compile the JS
compile <@@ Funscript.Program.main() @@> "./wwwroot/app.js"
