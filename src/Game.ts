/* tslint:disable:no-console */

import Character from "./Character";
import Command from "./Command";
import MessageBus from "./events/MessageBus";
export default class Game {
  private characterA: Character;
  private characterB: Character;

  private commandA: Command;
  private commandB: Command;

  private messageBus: MessageBus;

  constructor(
    characterA: Character,
    characterB: Character,
    commandA: Command,
    commandB: Command,
    messageBus: MessageBus
  ) {
    this.characterA = characterA;
    this.characterB = characterB;
    this.commandA = commandA;
    this.commandB = commandB;
    this.messageBus = messageBus;

    setInterval(() => this.poll(), 2000);
  }

  public display = (character: Character): void => {
    this.sleep(2000);
    console.log(`-----${character.value}-----`);
  };

  public poll(): void {
    this.messageBus.flushBufferedEvents();
  }

  public run(str: string): void {
    this.commandB.setCommandValue(str, this.characterB);
    this.commandA.setCommandValue(str, this.characterA);

    this.display(this.characterA);
    this.display(this.characterB);
  }

  private sleep = (ms: number): void => {
    const start = new Date().getTime();
    const expire = start + ms;
    while (new Date().getTime() < expire) {
      // do nothing but wait
    }
  };
}
