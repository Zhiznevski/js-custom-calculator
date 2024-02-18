import Command from '../command';
import ERROR_MESSAGE from '../utils/constants';

export default class AddDigitCommand extends Command {
  execute(state) {
    const { currentValue } = state;
    // if (state.operation && state.currentValue && state.prevValue) return state;
    if (currentValue === ERROR_MESSAGE) return state;

    if (currentValue.includes('.') && this.valueToAdd === '.') {
      return {
        ...state,
        currentValue,
      };
    }
    if (currentValue[0] === '0' && currentValue[1] !== '.' && this.valueToAdd === '0') {
      return {
        ...state,
        currentValue,
      };
    }
    if (currentValue === '0' && this.valueToAdd !== '.') {
      return {
        ...state,
        currentValue,
      };
    }
    return {
      ...state,
      currentValue: `${currentValue}${this.valueToAdd}`,
    };
  }
}
