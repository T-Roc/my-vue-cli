#! /usr/bin/env node

const program = require('commander');

// commander 中文文档 https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md

program
.version('0.1.0')
.command('create <name>')
.description('create a new project')
.action(name => {
  console.log(name)
})

program.parse()


