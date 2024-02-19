import Command from '../command';
import ERROR_MESSAGE from '../utils/constants';
import convertStringToNumber from '../utils/convertStringToNumber';

export default class DivideCommand extends Command {
  execute(state) {
    const { current, newValue } = convertStringToNumber(state.currentValue, state.prevValue);
    if (Number.isNaN(current) || Number.isNaN(newValue)) return state;
    const res = newValue / current;
    if (res === Infinity || Number.isNaN(res)) {
      return {
        ...state,
        operation: null,
        prevValue: '',
        currentValue: ERROR_MESSAGE,
      };
    }
    return {
      ...state,
      operation: null,
      prevValue: '',
      currentValue: res.toString(),
    };
  }
}
