/* tslint:disable:no-console */
import readline from "readline";
import Command from "./Command";
import Character from "./Character";
import Game from "./Game";
import MessageBus from "./events/MessageBus";
import Event from "./events/Event";

// config
const alienCommand = new Command();
alienCommand.addNewCommand("a", "A");
alienCommand.addNewCommand("A", "a");

const alien = new Character("a");

const personCommand = new Command();
personCommand.addNewCommand("p", "P");
personCommand.addNewCommand("P", "p");

const person = new Character("p");

const messageBus = new MessageBus();
const game = new Game(alien, person, alienCommand, personCommand, messageBus);

messageBus.addSubscriber(game);

// console input
readline.emitKeypressEvents(process.stdin);
// @ts-ignore
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    const event = new Event(str);
    console.log(`((((Main Received: ${str})))))`);
    // messageBus.publish(event);
    messageBus.bufferEvent(event);
  }
});

console.log("Press any key...");
