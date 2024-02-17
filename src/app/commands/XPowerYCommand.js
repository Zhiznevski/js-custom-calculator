import Command from '../command';
import convertStringToNumber from '../convertStringToNumber';

export default class XPowerYCommand extends Command {
  execute(state) {
    console.log('asdasdasd');
    const { current, newValue } = convertStringToNumber(state.currentValue, state.prevValue);
    if (Number.isNaN(current) || Number.isNaN(newValue)) return state;
    const res = (newValue ** current).toString();
    return {
      ...state,
      operation: null,
      prevValue: '',
      currentValue: res,
    };
  }
}
