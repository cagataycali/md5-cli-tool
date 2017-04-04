#!/usr/bin/env node
var program = require('commander');

program
  .version('1.0.0')
  .command('encrypt [query]', 'encrypt')
  .command('decrypt [query]', 'decrypt')
  .parse(process.argv);
