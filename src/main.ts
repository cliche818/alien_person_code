/* tslint:disable:no-console */
import readline from "readline";
import Command from "./Command";
import Character from "./Character";

readline.emitKeypressEvents(process.stdin);

// @ts-ignore
process.stdin.setRawMode(true);

let alien_command = new Command();
alien_command.addNewCommand('a', 'A');
alien_command.addNewCommand('A', 'a');

let alien = new Character('a');

function display() {
  return `-----${alien.value}-----`;
}

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    alien_command.setCommandValue(str, alien);
    console.log(display());
  }
});

console.log("Press any key...");
console.log(display());
