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

  private runningEventIds: any;

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
    this.runningEventIds = {};
    this.runningEventIds[this.characterA.name] = null;
    this.runningEventIds[this.characterB.name] = null;

    setInterval(() => {
      this.pollOne();
    }, 2000);
  }

  public display = (character: Character): void => {
    this.runningEventIds[character.name] = setTimeout(() => {
      console.log(`-----${character.value}-----`);
      console.log(new Date().getTime());
      this.runningEventIds[character.name] = null;
    }, 2000);
  };

  public poll(): void {
    this.messageBus.flushBufferedEvents();
  }

  public pollOne(): void {
    this.messageBus.flushOneBufferedEvent();
  }

  public run(str: string): void {
    this.commandB.setCommandValue(str, this.characterB);
    this.commandA.setCommandValue(str, this.characterA);

    this.display(this.characterA);
    this.display(this.characterB);
  }

  public cancelCurrentEvent(): void {
    Object.keys(this.runningEventIds).forEach(name => {
      if (this.runningEventIds[name]) {
        clearTimeout(this.runningEventIds[name]);
      }
    });
  }

  private sleep = (ms: number): void => {
    const start = new Date().getTime();
    const expire = start + ms;
    while (new Date().getTime() < expire) {
      // do nothing but wait
    }
  };
}
