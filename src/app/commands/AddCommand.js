import Command from '../command';
import convertStringToNumber from '../digitsHandler';

export default class AddCommand extends Command {
  execute(currentValue) {
    const { current, newValue } = convertStringToNumber(currentValue, this.valueToAdd);
    return current + newValue;
  }
}
