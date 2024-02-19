import Command from '../command';
import ERROR_MESSAGE from '../utils/constants';

export default class FactorialCommand extends Command {
  execute(state) {
    const newValue = parseFloat(state.currentValue);
    if (newValue > 150) {
      return {
        ...state,
        currentValue: ERROR_MESSAGE,
      };
    }
    const calculateFactorial = (value) => (value ? value * calculateFactorial(value - 1) : 1);
    const res = calculateFactorial(newValue);
    if (Number.isNaN(res)) return state;
    return {
      ...state,
      currentValue: res.toString(),
    };
  }
}
