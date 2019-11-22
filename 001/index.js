const readline = require('readline');
const helpers = require('./helpers');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  console.log(helpers.reverseString(line));
});
