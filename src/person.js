class Person {
  constructor(value) {
    this.value = value;
  }

  performCommand(command) {
    if (command === 'p') {
      this.value = 'p'
    } else if (command === 'P') {
      this.value = 'P'
    }
  }

  output_value() {
    return this.value
  }
}

module.exports = Person;