import Command from '../command';
import ERROR_MESSAGE from '../utils/constants';

export default class OneDivideXCommand extends Command {
  execute(state) {
    const newValue = 1 / parseFloat(state.currentValue);
    if (Number.isNaN(newValue)) return state;
    if (newValue === Infinity) {
      return {
        ...state,
        currentValue: ERROR_MESSAGE,
      };
    }
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
