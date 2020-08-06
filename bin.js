#!/usr/bin/env node

var file = process.argv[2]
if (!file) {
  console.log('usage: prop-types-table <file>')
  process.exit(1)
}

var fs = require('fs')
var render = require('./')

console.log(render(fs.readFileSync(file, 'utf8')))
