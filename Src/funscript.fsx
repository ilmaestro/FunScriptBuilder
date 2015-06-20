#load "references.fsx"

open System.IO
open FunScript
open FunScript.TypeScript

[<ReflectedDefinition>]
module Program =
    let hello() =
        Globals.window.alert("Hello from FunScript!")

    let jq(selector: string) = Globals.Dollar.Invoke selector
    let (?) jq name = jq("#" + name)

    let main() =
        jq?helloWorld.click(fun _ -> hello() :> obj) |> ignore
