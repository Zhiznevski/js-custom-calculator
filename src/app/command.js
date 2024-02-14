export default class Command {
  constructor(value) {
    this.value = value;
  }

  execute() {
    throw new Error('Error');
  }
}
