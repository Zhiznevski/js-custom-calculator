import Command from '../command';

export default class AddDigitCommand extends Command {
  execute(state) {
    const { currentValue } = state;
    if (currentValue.includes('.') && this.valueToAdd === '.') {
      return currentValue;
    }
    if (currentValue[0] === '0' && currentValue[1] !== '.' && this.valueToAdd === '0') {
      return currentValue;
    }
    if (currentValue === '0' && this.valueToAdd !== '.') {
      return this.valueToAdd;
    }
    return {
      ...state,
      currentValue: `${currentValue}${this.valueToAdd}`,
    };
  }
}
