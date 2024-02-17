import Command from '../command';

export default class OneDivideXCommand extends Command {
  execute(state) {
    const newValue = 1 / parseFloat(state.currentValue);
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
