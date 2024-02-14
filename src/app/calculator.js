export default class Calculator {
  constructor() {
    this.value = '';
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
  }
}
