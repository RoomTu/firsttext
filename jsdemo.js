#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

//输入html，css，js内容
var htmlContent,cssContent,jsContent;
htmlContent = "<!DOCTYPE><title>hello</title><h1>hi</h1>";
cssContent = "h1{color: red;}";
jsContent = "var string = 'hello world';alert(string);"

fs.writeFileSync("./index.html", htmlContent)
fs.writeFileSync("css/style.css", cssContent)
fs.writeFileSync("./js/main.js", jsContent)

process.exit(0)