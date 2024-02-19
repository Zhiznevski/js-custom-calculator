import Command from '../command';
import convertStringToNumber from '../utils/convertStringToNumber';

export default class XRootYCommand extends Command {
  execute(state) {
    const { current, newValue } = convertStringToNumber(state.currentValue, state.prevValue);
    if (Number.isNaN(current) || Number.isNaN(newValue)) return state;
    const res = (newValue ** (1 / current)).toString();
    return {
      ...state,
      operation: null,
      prevValue: '',
      currentValue: res,
    };
  }
}
