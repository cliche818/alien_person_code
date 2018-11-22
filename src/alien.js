class Alien {
  constructor(value) {
    this.value = value;
  }

  performCommand(command) {
    if (command == 'a') {
      this.value = 'a'
    } else if (command == 'A') {
      this.value = 'A'
    }
  }

  output_value() {
    return this.value
  }
}

module.exports = Alien;