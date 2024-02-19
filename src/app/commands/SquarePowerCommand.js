import Command from '../command';

export default class SquarePowerCommand extends Command {
  execute(state) {
    const newValue = parseFloat(state.currentValue) ** 2;
    if (Number.isNaN(newValue)) return state;
    return {
      ...state,
      currentValue: newValue.toString(),
    };
  }
}
