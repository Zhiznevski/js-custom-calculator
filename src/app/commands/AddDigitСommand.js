import Command from '../command';

export default class AddDigitCommand extends Command {
  execute(currentValue) {
    if (currentValue.includes('.') && this.valueToAdd === '.') {
      return currentValue;
    }
    if (currentValue[0] === '0' && currentValue[1] !== '.' && this.valueToAdd === '0') {
      return currentValue;
    }
    return `${currentValue}${this.valueToAdd}`;
  }
}
