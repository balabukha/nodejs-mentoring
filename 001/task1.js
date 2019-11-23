import readline from 'readline';
import reverseString from './helpers/reverseString.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  console.log(reverseString(line));
});
