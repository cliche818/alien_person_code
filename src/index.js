const readline = require('readline');
const Person = require('./person');
const Alien = require('./alien');

// execute project with node src/index.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(Person)

var person = new Person('p');
var alien = new Alien('a');

rl.setPrompt('What is the command? Press a letter key: ');
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
    default:
      let command = line.trim();
      person.performCommand(command);
      alien.performCommand(command);
      console.log(`${person.output_value()}            ${alien.output_value()}`);
      break;
  }
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
