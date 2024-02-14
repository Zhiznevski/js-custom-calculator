import Command from '../command';

export default class SubstructCommand extends Command {
  execute(currentValue) {
    return this.value - currentValue;
  }
}
