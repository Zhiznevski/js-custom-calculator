import Command from '../command';

export default class SquareRootCommand extends Command {
  execute(state) {
    const newValue = parseFloat(Math.sqrt(state.currentValue));
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
