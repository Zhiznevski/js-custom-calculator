export default class Command {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute() {
    throw new Error('Error');
  }
}
