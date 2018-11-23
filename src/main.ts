/* tslint:disable:no-console */
import readline from "readline";

readline.emitKeypressEvents(process.stdin);

// @ts-ignore
process.stdin.setRawMode(true);

let alien = "A";

function display() {
  return `-----${alien}-----`;
}

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    alien = str;
    console.log(display());
  }
});

console.log("Press any key...");
console.log(display());
