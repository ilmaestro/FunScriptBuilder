# FunScriptBuilder

FunScriptBuilder aims to make it easy to get started on a [FunScript](http://funscript.info) project and be productive as soon as possible.

## Requirements
- mono / F# interactive (3.1)
- mac / linux

## Installation (Mac/Linux)

```shell
./build.sh
```

## gulp pipeline
- fs: run "fsharpi build.fsx", which compiles funscript.fsx to wwwroot/app.js
- watch: any *.fsx changes
- run server
