export default class Calculator {
  constructor(input) {
    this.state = {
      currentValue: '',
      prevValue: '',
      operation: null,
      input,
    };
  }

  executeCommand(command) {
    this.state = command.execute(this.state);
    this.updateDisplay();
  }

  updateDisplay() {
    this.state.input.innerText = this.state.currentValue;
  }
}
