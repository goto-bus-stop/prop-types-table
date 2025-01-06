#!/usr/bin/env node

import fs from 'node:fs'
import render from 'prop-types-table'

const file = process.argv[2]
if (!file) {
  console.log('usage: prop-types-table <file>')
  process.exit(1)
}

console.log(render(fs.readFileSync(file, 'utf8')))
