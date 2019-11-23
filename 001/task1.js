const readline = require('readline');
const reverseString = require('./helpers/reverseString.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  console.log(reverseString(line));
});
