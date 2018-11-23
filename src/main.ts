/* tslint:disable:no-console */
import inquirer, { Question } from "inquirer";

async function getCommand() {
  const enterCommand: Question = {
    name: "command",
    message: "Enter a command",
    validate(input: string) {
      return ["A", "X"].indexOf(input) >= 0;
    },
  };
  const { command } = await inquirer.prompt([enterCommand]);
  return command;
}

async function main() {
  let command = "";
  while (command !== "X") {
    command = await getCommand();
    console.log(command);
  }
}

main();
