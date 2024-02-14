import Command from '../command';

export default class AddCommand extends Command {
  execute(currentValue) {
    return this.value + currentValue;
  }
}
