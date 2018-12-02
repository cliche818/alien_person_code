import Character from "./Character";
export default class Command {
    commands: any;

    constructor() {
        this.commands = {};
    }

    addNewCommand(key: string, value: string): void {
        this.commands[key] = value;
    }

    setCommandValue(key: string, character: Character): void {
        if (this.commands[key]) {
            character.value = this.commands[key];
        }
    }
}