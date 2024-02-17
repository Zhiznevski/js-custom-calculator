export default class Calculator {
  constructor(input) {
    this.state = {
      currentValue: '',
      prevValue: '',
      operation: null,
      input,
      memory: '',
    };
  }

  executeCommand(command) {
    this.state = command.execute(this.state);
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.state.currentValue) this.state.input.innerText = this.state.currentValue;
    else this.state.input.innerText = this.state.prevValue;
  }

  clearMemory() {
    this.state = {
      ...this.state,
      memory: '',
    };
  }

  addToMemory() {
    this.state = {
      ...this.state,
      memory: this.state.memory + this.state.currentValue,
    };
  }

  deleteFromMemory() {
    this.state = {
      ...this.state,
      memory: this.state.memory - this.state.currentValue,
    };
  }

  showMemory() {
    this.state = {
      ...this.state,
      currentValue: this.state.memory,
    };
  }
}
