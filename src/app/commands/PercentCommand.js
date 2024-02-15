import Command from '../command';

export default class PercentCommand extends Command {
  execute(state) {
    const newValue = (parseFloat(state.currentValue) / 100).toString();
    return {
      ...state,
      currentValue: newValue,
    };
  }
}
