#!/usr/bin/env node

const file = process.argv[2]
if (!file) {
  console.log('usage: prop-types-table <file>')
  process.exit(1)
}

const fs = require('fs')
const render = require('./')

console.log(render(fs.readFileSync(file, 'utf8')))
