import Character from "./Character";
export default class Command {
  public commands: any;

  constructor() {
    this.commands = {};
  }

  public addNewCommand(key: string, value: string): void {
    this.commands[key] = value;
  }

  public setCommandValue(key: string, character: Character): void {
    if (this.commands[key]) {
      character.value = this.commands[key];
    }
  }
}
