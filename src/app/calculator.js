export default class Calculator {
  constructor(display) {
    this.state = {
      currentValue: '',
      prevValue: '',
      operation: null,
      memory: '',
    };
    this.display = display;
  }

  executeCommand(command) {
    this.state = command.execute(this.state);
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.state.currentValue) this.display.innerText = this.state.currentValue;
    else this.display.innerText = this.state.prevValue;
  }
}
