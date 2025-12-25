TypeScript

Typescript needs to be compiled to transform into an equivalent JS
Its the js (not ts) that run in the node or browser.

Setup Dev Environment
Install node

Install Typescript
//install typescript npm install global (g)
npm i -g Typescript

//check installation
tsc -v

Install vscode

Compile ts to js
> tsc index.ts
This will generate equivalent js file index.js

node index.js

Create a configuration file for typescript compiler
tsc --init

ES2016 is supported by most of the modern browsers and you can safely set this one

Setting up the Debugger
put a breakpoint in index.ts
Open Debug Panel - Click on Create a launch.json file and then select Node.js
It will generate the file launch.json file
Edit this file to add this line - "preLaunchTask": "tsc: build - tsconfig.json",

launch.json

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\src\\index.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
