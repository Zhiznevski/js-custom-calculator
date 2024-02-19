import Command from '../command';

export default class PercentCommand extends Command {
  execute(state) {
    const newValue = parseFloat(state.currentValue) / 100;
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
