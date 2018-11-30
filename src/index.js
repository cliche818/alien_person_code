const Character = require('./character');
const display = require('./display')

const commands1 = {
  'a': 'a',
  'A': 'B'
}

const commands2 = {
  'p': 'P',
  'P': 'p'
}

let character1 = new Character('A', commands1);
let character2 = new Character('P', commands2);

display(character1, character2)