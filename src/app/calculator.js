export default class Calculator {
  constructor() {
    this.currentValue = '0';
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue).toString();
  }
}
