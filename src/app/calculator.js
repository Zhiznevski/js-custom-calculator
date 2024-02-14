export default class Calculator {
  constructor(input) {
    this.currentValue = '';
    this.prevValue = '';
    this.input = input;
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue).toString();
  }

  setOperation() {}

  updateDisplay() {
    this.input.innerText = this.currentValue;
  }
}
