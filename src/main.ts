/* tslint:disable:no-console */
import readline from "readline";
import Command from "./Command";
import Character from "./Character";
import Game from "./Game";

readline.emitKeypressEvents(process.stdin);

// @ts-ignore
process.stdin.setRawMode(true);

const alienCommand = new Command();
alienCommand.addNewCommand("a", "A");
alienCommand.addNewCommand("A", "a");

const alien = new Character("a");

const personCommand = new Command();
personCommand.addNewCommand("p", "P");
personCommand.addNewCommand("P", "p");

const person = new Character("p");

const game = new Game(alien, person, alienCommand, personCommand);

let isDelayed = true;

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    if (isDelayed) {
      const initialDelay = setTimeout(() => {
        game.run(str);

        clearTimeout(initialDelay);
        isDelayed = false;
      }, 5000);
    } else {
      game.run(str);
    }
  }
});

console.log("Press any key...");
